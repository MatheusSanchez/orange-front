import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { CardProfile } from '../../components/CardProfile'
import { OpenModalCreateNewProject } from '../../components/OpenModalCreateNewProject'
import { SearchTags } from '../../components/SearchTags'
import { UploadFileContent } from '../../components/UploadFileContent'
import { EmptyFileContent } from '../../components/UploadFileContent/EmptyFileContent'
import {
  CardProfileContainer,
  InputContainer,
  MainContainer,
  MyProjectsContainer,
  ProjectsContainer,
  StyledTypography,
} from './styles'

export function MyProjects() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <MyProjectsContainer>
      <Helmet title="Meus Projetos" />
      <CardProfileContainer>
        <CardProfile />
      </CardProfileContainer>

      <MainContainer>
        <InputContainer>
          <StyledTypography variant="h5">Meus Projetos</StyledTypography>
          <SearchTags />
        </InputContainer>

        <ProjectsContainer>
          {/* {userData?.user.projects !== null ? (
            <UploadFileContent onClick={handleOpenModal} />
          ) : (
            'aqui seria um map com todos os projetos'
          )} */}

          <UploadFileContent onClick={handleOpenModal} />
          <EmptyFileContent />
          <EmptyFileContent />
        </ProjectsContainer>
      </MainContainer>
      <OpenModalCreateNewProject
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </MyProjectsContainer>
  )
}
