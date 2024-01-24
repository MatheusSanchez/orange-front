import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'
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
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

import googleIcon from '../../assets/googleIcon.svg'
import imgLoginUp from '../../assets/imgLoginUpscale.jpg'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
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
        <FormContainer>
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
          <BtnContainer
            type="submit"
            fullWidth
            variant="contained"
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
