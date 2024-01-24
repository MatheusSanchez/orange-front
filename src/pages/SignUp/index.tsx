import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Typography,
  TextField,
  Button,
  Container,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from '@mui/material'
import { useState } from 'react'

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '109px',
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        style={{
          color:
            'var(--Color-Brand-Primria-Primary-90, var(--Color-Brand-Primria-Primary-90, #224))',
          textAlign: 'center',
          fontFamily: 'Roboto',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '24px',
          marginBottom: '16px',
        }}
      >
        Cadastre-se
      </Typography>
      <form style={{ width: '100%', marginTop: '16px' }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="nome"
          label="Nome"
          name="nome"
          autoComplete="nome"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="sobrenome"
          label="Sobrenome"
          name="sobrenome"
          autoComplete="sobrenome"
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
        />

        <FormControl variant="outlined" margin="normal" fullWidth>
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
            color: '#FFF',
            fontFamily: 'Roboto',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '26px',
            letterSpacing: '0.46px',
            textTransform: 'uppercase',
            marginTop: '16px',
          }}
        >
          Cadastrar
        </Button>
      </form>
    </Container>
  )
}
