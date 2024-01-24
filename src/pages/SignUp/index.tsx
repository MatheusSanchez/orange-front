import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'
import {
  FormContainer,
  SignUpContainer,
  SignUpContent,
  StyledDesktop,
  TitleContainer,
} from './styles'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

import imgSignUp from '../../assets/imgCadastroUpscale.jpg'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import Alert from '@mui/material/Alert'

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const handleSignUp = () => {
    setShowAlert(true)
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
        <TitleContainer>Cadastre-se</TitleContainer>
        <FormContainer>
          <StyledDesktop>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="nome"
              label="Nome"
              name="nome"
              autoComplete="nome"
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="sobrenome"
              label="Sobrenome"
              name="sobrenome"
              autoComplete="sobrenome"
            />
          </StyledDesktop>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
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
              name="Password"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              backgroundColor: '#F52',
            }}
            onClick={handleSignUp}
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
