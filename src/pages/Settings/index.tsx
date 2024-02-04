import { zodResolver } from '@hookform/resolvers/zod'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { Avatar, InputLabel, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import avatarPlaceholder from '../../assets/avatarPlaceholder.png'
import { useModalContext } from '../../contexts/ModalContext'
import { api } from '../../lib/axios'
import {
  InputsContainer,
  MainContainer,
  SettingsContainer,
  StyledButton,
  TextContainer,
} from './styles'

const editUserPasswordSchema = z.object({
  oldPassword: z.string().min(6, 'Password must be at least 6 characters'),
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
})

type EditUserPasswordSchema = z.infer<typeof editUserPasswordSchema>

export function Settings() {
  const { openUpdateProfileModal, openAlertErrorModal } = useModalContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditUserPasswordSchema>({
    resolver: zodResolver(editUserPasswordSchema),
  })

  async function handleUpdateUserPassword(data: EditUserPasswordSchema) {
    const { oldPassword, newPassword, confirmPassword } = data

    if (newPassword === confirmPassword) {
      const editUserPassResponse = await api.put(`/user/edit/pass`, {
        newPassword,
        oldPassword,
      })

      if (editUserPassResponse.status === 200) {
        openUpdateProfileModal()
      } else {
        openAlertErrorModal()
      }
    } else {
      openAlertErrorModal()
    }

    reset()
  }

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
        <InputsContainer onSubmit={handleSubmit(handleUpdateUserPassword)}>
          <InputLabel htmlFor="currentPassword">
            Digite a senha atual
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            type="text"
            id="currentPassword"
            error={!!errors.oldPassword}
            {...register('oldPassword')}
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
            placeholder="Digite a nova senha"
            error={!!errors.newPassword}
            {...register('newPassword')}
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
            placeholder="Repita a senha"
            error={!!errors.confirmPassword}
            {...register('confirmPassword')}
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
          <StyledButton fullWidth type="submit" variant="contained">
            Atualizar Senha
          </StyledButton>
        </InputsContainer>

        <Link to="/editar-perfil" className="Settings">
          Clique aqui para editar seu perfil
        </Link>
      </MainContainer>
    </SettingsContainer>
  )
}
