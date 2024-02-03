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
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import * as z from 'zod'

import googleIcon from '../../assets/googleIcon.svg'
import imgLoginUp from '../../assets/imgLoginUpscale.jpg'
import { ErrorRegisterAlert } from '../../components/Alert'
import { useAlertContext } from '../../contexts/AlertContext.'
import { useAuth } from '../../hooks/auth'
import {
  FormContainer,
  GoogleButton,
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
  const { SignIn } = useAuth()
  const { showErrorAlert } = useAlertContext()

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

  return (
    <SignInContainer>
      <img src={imgLoginUp} alt="" />
      <SignInContent>
        <ErrorRegisterAlert />
        <Helmet title="Login" />
        <TitleContainer>Entre no Orange Portfólio</TitleContainer>
        <GoogleButtonContainer>
          <GoogleButton>
            <img src={googleIcon} alt="" />
            Entrar com Google
          </GoogleButton>
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
