import { zodResolver } from '@hookform/resolvers/zod'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { Avatar, InputLabel, MenuItem, TextField } from '@mui/material'
import * as countriesList from 'countries-list'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import avatarPlaceholder from '../../assets/avatarPlaceholder.png'
import { useModalContext } from '../../contexts/ModalContext'
import { useAuth } from '../../hooks/auth'
import { api } from '../../lib/axios'
import {
  AvatarContainer,
  EditProfileContainer,
  InputsContainer,
  MainContainer,
  NameContainer,
  StyledButton,
  TextContainer,
} from './styles'

const editUserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  country: z.string(),
})

type EditUserSchema = z.infer<typeof editUserSchema>

export function EditProfile() {
  const { userData } = useAuth()
  const { openUpdateProfileModal, openAlertErrorModal } = useModalContext()

  const { register, handleSubmit, reset } = useForm<EditUserSchema>({
    resolver: zodResolver(editUserSchema),
  })

  const allCountries = Object.values(countriesList.countries)

  const handleCountryChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setSelectedCountry(event.target.value as string)
  }
  async function handleUpdateProfile(data: EditUserSchema) {
    const { name, surname, country } = data
    reset()

    const editUserResponse = await api.put(`/user/${userData?.user.id}/edit`, {
      name,
      surname,
      country,
    })
    localStorage.setItem(
      '@squad40:user',
      JSON.stringify(editUserResponse.data.user),
    )

    if (editUserResponse.status === 200) {
      openUpdateProfileModal()
    } else {
      openAlertErrorModal()
    }
  }

  return (
    <EditProfileContainer>
      <Link to="/meus-projetos">
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
        <InputsContainer onSubmit={handleSubmit(handleUpdateProfile)}>
          <NameContainer>
            <div>
              <InputLabel htmlFor="name">Nome</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                id="name"
                required
                {...register('name')}
                defaultValue={userData?.user.name}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <InputLabel htmlFor="surname" {...register('surname')}>
                Sobrenome
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                id="surname"
                {...register('surname')}
                required
                defaultValue={userData?.user.surname}
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
            {...register('country')}
            required
            defaultValue={userData?.user.country}
            onChange={handleCountryChange}
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
          <StyledButton fullWidth type="submit" variant="contained">
            Atualizar
          </StyledButton>
        </InputsContainer>

        <Link to="/configuracoes" className="AccountSettings">
          Clique aqui para editar as configurações da conta
        </Link>
      </MainContainer>
    </EditProfileContainer>
  )
}
