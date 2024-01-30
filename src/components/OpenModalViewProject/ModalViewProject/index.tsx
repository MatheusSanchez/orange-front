import { Avatar, Modal } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import avatarPlaceholder from '../../../assets/avatarPlaceholder.png'
import { useAuth } from '../../../hooks/auth'
import {
  AvatarContainer,
  CardProfile,
  ModalBox,
  Tag,
  UserDataContainer,
} from './styles'

interface ModalViewProjectProps {
  open: boolean
  preview: string | undefined
  setPreview: React.Dispatch<React.SetStateAction<string | undefined>>
  handleClose: () => void
  projectInfo: {
    title: string
    tags: string
    link: string
    description: string
  }
  imageBanner: string
}

export function ModalViewProject(props: ModalViewProjectProps) {
  const { userData } = useAuth()
  const { title, description, link, tags } = props.projectInfo

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="Adicionar projeto"
    >
      <ModalBox>
        <Helmet title="Visualizar Projeto" />
        <CardProfile>
          <AvatarContainer>
            <Avatar
              alt=""
              src={avatarPlaceholder}
              sx={{ width: 40, height: 40 }}
            />
          </AvatarContainer>

          <UserDataContainer>
            <h3>
              {userData?.user.name} {userData?.user.surname}
            </h3>
            <span>12/12</span>
          </UserDataContainer>
          <h1>{title}</h1>
          <Tag>{tags}</Tag>
        </CardProfile>

        <img
          src={props.imageBanner}
          alt="Imagem do Projeto"
          style={{ width: '100%', height: 'auto', marginBottom: '4rem' }}
        />

        <p>{description}</p>
        <h4>Download</h4>
        <a href={link}>{link}</a>
      </ModalBox>
    </Modal>
  )
}
