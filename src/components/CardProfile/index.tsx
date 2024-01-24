import { Avatar } from '@mui/material'
import {
  AvatarContainer,
  BtnContainer,
  CardProfileContainer,
  UserInfoContainer,
} from './styles'

import avatarPlaceholder from '../../assets/avatarPlaceholder.jpeg'
import { ButtonAndModal } from '../ButtonAndModal'

export function CardProfile() {
  return (
    <CardProfileContainer>
      <AvatarContainer>
        <Avatar
          alt=""
          src={avatarPlaceholder}
          sx={{ width: 122, height: 122 }}
        />
      </AvatarContainer>
      <UserInfoContainer>
        <h2>Camila Soares</h2>
        <span>Brasil</span>
      </UserInfoContainer>
      <BtnContainer>
        <ButtonAndModal />
      </BtnContainer>
    </CardProfileContainer>
  )
}
