import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import insertImage from '../../assets/insertProjects.png'
import { CardProfile } from '../../components/CardProfile'
import { ModalCreateNewProject } from '../../components/ModalCreateNewProject'
import { SearchTags } from '../../components/SearchTags'
import {
  EmptyProject,
  MyProjectsContainer,
  ProjectsContainer,
  StyledTypography,
  UploadFileContent,
} from './styles'

export function MyProjects() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <MyProjectsContainer>
      <Helmet title="Meus Projetos" />

      <CardProfile />

      <div style={{ marginTop: '0px' }}>
        <StyledTypography variant="h5">Meus Projetos</StyledTypography>
        <SearchTags />

        <ProjectsContainer>
          <UploadFileContent>
            <img src={insertImage} alt="" onClick={handleOpenModal} />
          </UploadFileContent>
          <EmptyProject />
          <EmptyProject />
        </ProjectsContainer>
      </div>

      <ModalCreateNewProject open={openModal} handleClose={handleCloseModal} />
    </MyProjectsContainer>
  )
}
