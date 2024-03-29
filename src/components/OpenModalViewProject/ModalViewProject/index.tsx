import { Avatar, Chip, Modal } from '@mui/material'
import { format } from 'date-fns'
import { Helmet } from 'react-helmet-async'

import {
  AvatarContainer,
  CardProfile,
  CloseButton,
  DistanceButton,
  ImageBanner,
  ModalBox,
  ProfileContent,
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
    date?: string
    avatar?: string
    author?: string
  }
  imageBanner: string
}

export function ModalViewProject(props: ModalViewProjectProps) {
  const { title, description, link, tags } = props.projectInfo

  const orignalDate = props.projectInfo.date
    ? new Date(props.projectInfo.date)
    : null
  const formattedDate = orignalDate ? format(orignalDate, 'dd/MM') : ''
  const formattedTags = tags.split(',').map((tag) => tag.trim())
  const isSmallScreen = window.innerWidth <= 978

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
        {isSmallScreen ? (
          <>
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
                  alt={`Foto avatar do usuário ${props.projectInfo.author}`}
                  src={props.projectInfo.avatar}
                  sx={{ width: 40, height: 40 }}
                />
                <UserDataContainer>
                  <h3>{props.projectInfo.author}</h3>
                  <span>{formattedDate}</span>
                </UserDataContainer>
              </AvatarContainer>

              <div>
                {formattedTags.map((tag, index) => (
                  <Chip key={index} label={tag} sx={{ marginLeft: '.5rem' }} />
                ))}
              </div>
            </ProfileContent>
          </>
        ) : (
          <>
            <CardProfile>
              <ProfileContent>
                <AvatarContainer>
                  <Avatar
                    alt={`Foto avatar do usuário ${props.projectInfo.author}`}
                    src={props.projectInfo.avatar}
                    sx={{ width: 40, height: 40 }}
                  />
                  <UserDataContainer>
                    <h3>{props.projectInfo.author}</h3>
                    <span>{formattedDate}</span>
                  </UserDataContainer>
                </AvatarContainer>
              </ProfileContent>
              <h1>{title}</h1>
              <div>
                {formattedTags.map((tag, index) => (
                  <Chip key={index} label={tag} sx={{ marginLeft: '.5rem' }} />
                ))}
              </div>
            </CardProfile>

            <ImageBanner
              src={props.imageBanner}
              alt={`Imagem do projeto ${props.projectInfo?.title}`}
            />
          </>
        )}
        <p>{description}</p>
        <h4>Download</h4>
        <a href={`http://${link}`} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </ModalBox>
    </Modal>
  )
}
