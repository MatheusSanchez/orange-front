import { zodResolver } from '@hookform/resolvers/zod'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'
import Alert from '@mui/material/Alert'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as z from 'zod'

import imgSignUp from '../../assets/imgCadastroUpscale.jpg'
import { api } from '../../lib/axios'
import {
  FormContainer,
  SignUpContainer,
  SignUpContent,
  StyledDesktop,
  TitleContainer,
} from './styles'

const registerFormSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showError, setShowError] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleCreateUser(data: RegisterFormSchema) {
    try {
      const email = data.email
      const name = data.name
      // eslint-disable-next-line camelcase
      const password = data.password
      const surname = data.surname

      // eslint-disable-next-line camelcase
      api.post('/user', { email, name, password, surname })
      setShowError(false)
      setShowAlert(true)
      setTimeout(() => navigate('/login'), 2000) // this settimeout needs to be removed and a loader added to the button
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error) {
        setShowError(true)
      }
    }
  }
  return (
    <SignUpContainer>
      <img src={imgSignUp} alt="" />
      <SignUpContent>
        <Helmet title="Cadastro" />
        {showAlert && (
          <Alert
            variant="filled"
            severity="success"
            onClose={() => setShowAlert(false)}
          >
            Cadastro feito com sucesso
          </Alert>
        )}
        {showError && (
          <Alert
            variant="filled"
            severity="error"
            onClose={() => setShowError(false)}
          >
            Erro ao fazer cadastro
          </Alert>
        )}
        <TitleContainer>Cadastre-se</TitleContainer>
        <FormContainer onSubmit={handleSubmit(handleCreateUser)}>
          <StyledDesktop>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="nome"
              label="Nome"
              autoComplete="nome"
              {...register('name')}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="sobrenome"
              label="Sobrenome"
              autoComplete="sobrenome"
              {...register('surname')}
            />
          </StyledDesktop>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            {...register('email')}
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
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              backgroundColor: '#F52',
            }}
            disabled={isSubmitting}
          >
            Cadastre-se
          </Button>
          <span>
            <Link to="/login">Fazer Login</Link>
          </span>
        </FormContainer>
      </SignUpContent>
    </SignUpContainer>
  )
}
