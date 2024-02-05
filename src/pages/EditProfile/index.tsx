import { zodResolver } from '@hookform/resolvers/zod'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import { Avatar, InputLabel, MenuItem, TextField } from '@mui/material'
import * as countriesList from 'countries-list'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TailSpin } from 'react-loader-spinner'
import { z } from 'zod'

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

  const [loadingAuth, setLoadingAuth] = useState(false)
  const [imgFile, setImgFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | undefined>(
    `${userData?.user.avatar_url}`,
  )

  const { register, handleSubmit } = useForm<EditUserSchema>({
    resolver: zodResolver(editUserSchema),
  })

  const allCountries = Object.values(countriesList.countries)

  async function handleUpdateProfile(data: EditUserSchema) {
    setLoadingAuth(true)
    const { name, surname, country } = data

    const editUserResponse = await api.put(`/user/${userData?.user.id}/edit`, {
      name,
      surname,
      country,
    })
    localStorage.setItem(
      '@squad40:user',
      JSON.stringify(editUserResponse.data.user),
    )

    if (imgFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append('avatar', imgFile)
      const userNewAvatar = await api.post(
        `/user/${userData?.user.id}/photo`,
        fileUploadForm,
      )
      localStorage.setItem(
        '@squad40:user',
        JSON.stringify(userNewAvatar.data.user),
      )
    }

    if (editUserResponse.status === 200) {
      openUpdateProfileModal()
      setLoadingAuth(false)
    } else {
      openAlertErrorModal()
      setLoadingAuth(false)
    }
  }

  function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      setImgFile(file)
      const imagePreview = URL.createObjectURL(file)
      setPreview(imagePreview)
    }
  }

  return (
    <EditProfileContainer>
      <TextContainer>
        <h1>Editar Perfil</h1>
        <p>Atualize apenas os campos que deseja alterar</p>
      </TextContainer>
      <AvatarContainer>
        <Avatar alt="" src={preview} sx={{ width: 122, height: 122 }} />
        <label htmlFor="avatar">
          <CreateOutlinedIcon />
          <input type="file" id="avatar" onChange={handleChangeAvatar} />
        </label>
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
            {loadingAuth ? 'Atualizando' : 'Atualizar'}
          </StyledButton>
        </InputsContainer>
      </MainContainer>
    </EditProfileContainer>
  )
}
