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

import imgSignUp from '../../assets/imgCadastroUpscale.jpg'
import { useAuth } from '../../hooks/auth'
import {
  ErrorMessage,
  FormContainer,
  SignUpContainer,
  SignUpContent,
  StyledButton,
  StyledDesktop,
  TitleContainer,
} from './styles'

const registerFormSchema = z.object({
  name: z.string().regex(/^[a-zA-Z]+$/, {
    message: 'O nome e sobrenome só podem conter letras.',
  }),
  surname: z.string().regex(/^[a-zA-Z]+$/, {
    message: 'O nome e sobrenome só podem conter letras.',
  }),
  email: z
    .string()
    .email({ message: 'Por favor, insira um endereço de e-mail válido.' }),
  password: z
    .string()
    .min(
      6,
      'Sua senha deve conter pelo menos 6 caracteres para maior segurança',
    ),
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export function SignUp() {
  const { handleSignUp } = useAuth()

  const [showPassword, setShowPassword] = useState(false)
  const [loadingAuth, setLoadingAuth] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleCreateUser(data: RegisterFormSchema) {
    setLoadingAuth(true)

    const name = data.name
    const surname = data.surname
    const email = data.email
    const password = data.password

    try {
      await handleSignUp(name, surname, email, password)
      toast.success(`Usuário ${name} cadastrado com sucesso!`, {
        theme: 'colored',
      })
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Erro ao cadastrar usuário: ${error.message}`)
      } else {
        toast.error(`Erro desconhecido ao cadastrar usuário.`)
      }
    } finally {
      setLoadingAuth(false)
    }
  }
  return (
    <SignUpContainer>
      <img src={imgSignUp} alt="" />
      <SignUpContent>
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
        <Helmet title="Cadastro" />
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
          {(errors.name || errors.surname) && (
            <ErrorMessage>
              {errors.name?.message || errors.surname?.message}
            </ErrorMessage>
          )}
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

          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
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
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
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
            {loadingAuth ? 'Cadastrando...' : 'Cadastre-se'}
          </StyledButton>
          <span>
            <Link to="/login">Fazer Login</Link>
          </span>
        </FormContainer>
      </SignUpContent>
    </SignUpContainer>
  )
}
