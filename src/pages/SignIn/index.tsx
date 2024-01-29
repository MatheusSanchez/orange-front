import 'react-toastify/dist/ReactToastify.css'

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
import { toast, ToastContainer } from 'react-toastify'
import * as z from 'zod'

import googleIcon from '../../assets/googleIcon.svg'
import imgLoginUp from '../../assets/imgLoginUpscale.jpg'
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
  const { handleSignIn } = useAuth()

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

  async function signIn() {
    setLoadingAuth(true)
    try {
      await handleSignIn(email, password)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Erro ao realizar login: ${error.message}`)
      } else {
        toast.error(`Erro desconhecido ao realizar login.`)
      }
    } finally {
      setLoadingAuth(false)
    }
  }

  return (
    <SignInContainer>
      <img src={imgLoginUp} alt="" />
      <SignInContent>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Helmet title="Login" />
        <TitleContainer>Entre no Orange Portfólio</TitleContainer>
        <GoogleButtonContainer>
          <GoogleButton>
            <img src={googleIcon} alt="" />
            Entrar com Google
          </GoogleButton>
        </GoogleButtonContainer>
        <TextContainer>Faça login com email</TextContainer>
        <FormContainer onSubmit={handleSubmit(signIn)}>
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
