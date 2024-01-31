import { Avatar, Modal } from '@mui/material'
import { format } from 'date-fns'
import { Helmet } from 'react-helmet-async'

import avatarPlaceholder from '../../../assets/avatarPlaceholder.png'
import { useAuth } from '../../../hooks/auth'
import {
  AvatarContainer,
  CardProfile,
  CloseButton,
  DistanceButton,
  ImageBanner,
  ModalBox,
  ProfileContent,
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

  const formattedDate = format(new Date(), 'dd/MM')

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="Adicionar projeto"
    >
      <ModalBox>
        <DistanceButton>
          <CloseButton onClick={props.handleClose}>X</CloseButton>
        </DistanceButton>
        <Helmet title="Visualizar Projeto" />
        <CardProfile>
          <h1>{title}</h1>
        </CardProfile>

        <ImageBanner
          src={props.imageBanner}
          alt={`Imagem do projeto ${props.projectInfo?.title}`}
        />
        <ProfileContent>
          <AvatarContainer>
            <Avatar
              alt={`Foto avatar do usuário ${userData?.user.name} ${userData?.user.surname}`}
              src={avatarPlaceholder}
              sx={{ width: 40, height: 40 }}
            />
            <UserDataContainer>
              <h3>
                {userData?.user.name} {userData?.user.surname}
              </h3>
              <span>{formattedDate}</span>
            </UserDataContainer>
          </AvatarContainer>

          <Tag>{tags}</Tag>
        </ProfileContent>

        <p>{description}</p>
        <h4>Download</h4>
        <a href={link}>{link}</a>
      </ModalBox>
    </Modal>
  )
}
