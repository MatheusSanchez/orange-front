import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { Avatar, InputLabel, MenuItem, TextField } from '@mui/material'
import * as countriesList from 'countries-list'
import { Link } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatarPlaceholder.png'
import { useAuth } from '../../hooks/auth'
import {
  AvatarContainer,
  EditProfileContainer,
  InputsContainer,
  MainContainer,
  NameContainer,
  StyledButton,
  TextContainer,
} from './styles'

export function EditProfile() {
  const { userData } = useAuth()

  const allCountries = Object.values(countriesList.countries)

  return (
    <EditProfileContainer>
      <Link to="/previous-page">
        <NavigateBeforeIcon style={{ fontSize: 40 }} />
      </Link>
      <TextContainer>
        <h1>Editar Perfil</h1>
        <p>Atualize apenas os campos que deseja alterar</p>
      </TextContainer>
      <AvatarContainer>
        <Avatar
          alt=""
          src={avatarPlaceholder}
          sx={{ width: 122, height: 122 }}
        />
        <CreateOutlinedIcon />
      </AvatarContainer>
      <MainContainer>
        <InputsContainer>
          <NameContainer>
            <div>
              <InputLabel htmlFor="name">Nome</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                id="name"
                name="name"
                value={userData?.user.name}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <InputLabel htmlFor="surname">Sobrenome</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                id="surname"
                name="surname"
                value={userData?.user.surname}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </NameContainer>
          <InputLabel htmlFor="country">País</InputLabel>
          <TextField
            select
            variant="outlined"
            fullWidth
            id="country"
            name="country"
            defaultValue=""
            InputLabelProps={{
              shrink: false,
            }}
          >
            {allCountries.map((country) => (
              <MenuItem key={country.name} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </TextField>
        </InputsContainer>
        <StyledButton fullWidth type="button" variant="contained">
          Atualizar
        </StyledButton>
        <span>
          <Link to="/" className="AccountSettings">
            Clique aqui para editar as configurações da conta
          </Link>
        </span>
      </MainContainer>
    </EditProfileContainer>
  )
}
