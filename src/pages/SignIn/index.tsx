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
import { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as z from 'zod'

import googleIcon from '../../assets/googleIcon.svg'
import imgLoginUp from '../../assets/imgLoginUpscale.jpg'
import { AuthContext } from '../../hooks/auth'
import {
  BtnContainer,
  FormContainer,
  GoogleButton,
  GoogleButtonContainer,
  SignInContainer,
  SignInContent,
  TextContainer,
  TitleContainer,
} from './styles'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()

  function returnUser() {
    handleSignIn(email, password)
    setTimeout(() => navigate('/'), 1000) // this settimeout needs to be removed and a loader added to the button
  }

  return (
    <SignInContainer>
      <img src={imgLoginUp} alt="" />
      <SignInContent>
        <Helmet title="Login" />
        <TitleContainer>Entre no Orange Portfólio</TitleContainer>
        <GoogleButtonContainer>
          <GoogleButton>
            <img src={googleIcon} alt="" />
            Entrar com Google
          </GoogleButton>
        </GoogleButtonContainer>
        <TextContainer>Faça login com email</TextContainer>
        <FormContainer onSubmit={handleSubmit(returnUser)}>
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
          <BtnContainer
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            style={{
              backgroundColor: '#F52',
            }}
          >
            Entrar
          </BtnContainer>
          <span>
            <Link to="/cadastro">Cadastre-se</Link>
          </span>
        </FormContainer>
      </SignInContent>
    </SignInContainer>
  )
}
