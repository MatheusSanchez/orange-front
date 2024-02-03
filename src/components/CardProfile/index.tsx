import { Avatar } from '@mui/material'

import { useAuth } from '../../hooks/auth'
import { ButtonOpenModalCreateNewProject } from './ButtonOpenModalCreateNewProject'
import {
  AvatarContainer,
  ButtonContainer,
  CardProfileContainer,
  UserDataContainer,
} from './styles'

export function CardProfile() {
  const { userData } = useAuth()

  return (
    <CardProfileContainer>
      <AvatarContainer>
        <Avatar
          alt=""
          src={userData?.user.photo_url}
          sx={{ width: 122, height: 122 }}
        />
      </AvatarContainer>

      <UserDataContainer>
        <h2>
          {userData?.user.name} {userData?.user.surname}
        </h2>
        <span>{userData?.user.country || 'País não especificado'}</span>
      </UserDataContainer>

      <ButtonContainer>
        <ButtonOpenModalCreateNewProject />
      </ButtonContainer>
    </CardProfileContainer>
  )
}
