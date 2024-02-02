import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'

import avatarPlaceholder from '../../assets/avatarPlaceholder.png'
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
  const [country, setCountry] = useState(userData?.user.country || '')

  useEffect(() => {
    setCountry(userData?.user.country || '')
  }, [userData?.user.country])

  return (
    <CardProfileContainer>
      <AvatarContainer>
        <Avatar
          alt=""
          src={avatarPlaceholder}
          sx={{ width: 122, height: 122 }}
        />
      </AvatarContainer>

      <UserDataContainer>
        <h2>
          {userData?.user.name} {userData?.user.surname}
        </h2>
        <span>{country || 'País não especificado'}</span>
      </UserDataContainer>

      <ButtonContainer>
        <ButtonOpenModalCreateNewProject />
      </ButtonContainer>
    </CardProfileContainer>
  )
}
