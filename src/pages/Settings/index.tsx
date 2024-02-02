import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { Avatar, InputLabel, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatarPlaceholder.png'
import {
  InputsContainer,
  MainContainer,
  SettingsContainer,
  StyledButton,
  TextContainer,
} from './styles'

export function Settings() {
  return (
    <SettingsContainer>
      <Link to="/meus-projetos">
        <NavigateBeforeIcon style={{ fontSize: 40 }} />
      </Link>
      <TextContainer>
        <h1>Editar configurações da conta</h1>
      </TextContainer>

      <Avatar alt="" src={avatarPlaceholder} sx={{ width: 122, height: 122 }} />

      <MainContainer>
        <InputsContainer>
          <InputLabel htmlFor="currentPassword">
            Digite a senha atual
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            type="text"
            id="currentPassword"
            name="currentPassword"
            placeholder="Digite a senha atual"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <InputLabel htmlFor="newPassword">Nova senha</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            type="text"
            id="newPassword"
            name="newPassword"
            placeholder="Digite a nova senha"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <InputLabel htmlFor="confirmPassword">Confirme a senha</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repita a senha"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
        </InputsContainer>
        <StyledButton fullWidth type="button" variant="contained">
          Atualizar
        </StyledButton>
        <Link to="/editar-perfil" className="Settings">
          Clique aqui para editar seu perfil
        </Link>
      </MainContainer>
    </SettingsContainer>
  )
}
