/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import * as z from 'zod'

import imgLoginUp from '../../assets/imgLoginUpscale.jpg'
import { ErrorRegisterAlert } from '../../components/Alert'
import { useAlertContext } from '../../contexts/AlertContext.'
import { useAuth } from '../../hooks/auth'
import { api } from '../../lib/axios'
import {
  FormContainer,
  GoogleButtonContainer,
  SignInContainer,
  SignInContent,
  StyledButton,
  TextContainer,
  TitleContainer,
} from './styles'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function SignIn() {
  const { SignIn, SignUpGoogle } = useAuth()
  const { showErrorAlert, showRegisterAlert } = useAlertContext()

  const [showPassword, setShowPassword] = useState(false)
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const { register, handleSubmit } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleSignIn() {
    setLoadingAuth(true)
    try {
      await SignIn(email, password)
    } catch (error: any) {
      switch (true) {
        case error.response && error.response.status === 401:
          showErrorAlert(`E-mail e/ou senha inválido.`)
          break
        case error instanceof Error:
          showErrorAlert(`Erro ao fazer login: ${error.message}`)
          break
        default:
          showErrorAlert(`Erro ao fazer login.`)
          break
      }
    } finally {
      setLoadingAuth(false)
    }
  }

  interface DecodedCredential {
    email: string
    family_name?: string
    given_name: string
    picture?: string
    jti: string
  }

  return (
    <SignInContainer>
      <img src={imgLoginUp} alt="" />
      <SignInContent>
        <ErrorRegisterAlert />
        <Helmet title="Login" />
        <TitleContainer>Entre no Orange Portfólio</TitleContainer>
        <GoogleButtonContainer>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              if (!credentialResponse.credential) {
                showErrorAlert(`Erro ao autenticar com o Google`)
                return
              }

              const credentialResponseDecoded = jwtDecode(
                credentialResponse.credential,
              ) as DecodedCredential

              const { email, family_name, given_name, picture } =
                credentialResponseDecoded

              const name = given_name
              const surname = family_name || ''
              const avatar_url = picture
              const is_google = true
              const password = email

              try {
                const searchUser = await api.get('/user', {
                  params: { email },
                })

                if (searchUser.status === 200) {
                  await SignIn(email, password)
                } else {
                  throw new Error(`Usuário não encontrado`)
                }
              } catch (error: any) {
                if (error.response && error.response.status === 404) {
                  await SignUpGoogle(
                    name,
                    email,
                    password,
                    is_google,
                    surname,
                    avatar_url,
                  )
                    .then(() => SignIn(email, password))
                    .then(() => showRegisterAlert())
                } else if (error.response && error.response.status === 401) {
                  showErrorAlert(`Este e-mail já foi cadastrado`)
                } else if (error.response && error.response.status === 409) {
                  showErrorAlert(`Este e-mail já foi cadastrado`)
                } else if (error instanceof Error) {
                  showErrorAlert(`Erro ao autenticar usuário: ${error.message}`)
                } else {
                  showErrorAlert(`Erro ao autenticar usuário`)
                }
              }
            }}
          />
        </GoogleButtonContainer>
        <TextContainer>Faça login com email</TextContainer>
        <FormContainer onSubmit={handleSubmit(handleSignIn)}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            {...register('email')}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password *
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              required
              fullWidth
              label="Password"
              value={password}
              {...register('password')}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <StyledButton
            fullWidth
            type="submit"
            variant="contained"
            disabled={loadingAuth}
            startIcon={
              loadingAuth ? (
                <TailSpin width={12} height={12} color="#00000061" />
              ) : null
            }
          >
            {loadingAuth ? 'Entrando...' : 'Entrar'}
          </StyledButton>
          <span>
            <Link to="/cadastro">Cadastre-se</Link>
          </span>
        </FormContainer>
      </SignInContent>
    </SignInContainer>
  )
}
