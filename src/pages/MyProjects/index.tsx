/* eslint-disable react-hooks/exhaustive-deps */
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { CardMyProject } from '../../components/CardMyProject'
import { CardProfile } from '../../components/CardProfile'
import { OpenModalCreateNewProject } from '../../components/OpenModalCreateNewProject'
import { SearchTags } from '../../components/SearchTags'
import { UploadFileContent } from '../../components/UploadFileContent'
import { EmptyFileContent } from '../../components/UploadFileContent/EmptyFileContent'
import { useAuth } from '../../hooks/auth'
import { useProjects } from '../../hooks/userProjects'
import { ChipData } from '../../interfaces/ChipData'
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
  const [chipData, setChipData] = useState<readonly ChipData[]>([])

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const { userProjectsData, getUserProjects } = useProjects()
  const { userData } = useAuth()

  useEffect(() => {
    if (userData?.user.id) {
      getUserProjects(userData?.user.id)
    }
  }, [])
  return (
    <MyProjectsContainer>
      <Helmet title="Meus Projetos" />
      <CardProfileContainer>
        <CardProfile />
      </CardProfileContainer>

      <MainContainer>
        <InputContainer>
          <StyledTypography variant="h5">Meus Projetos</StyledTypography>
          <SearchTags chipData={chipData} setChipData={setChipData} />
        </InputContainer>

        <ProjectsContainer>
          {userProjectsData.length === 0 ? (
            <>
              <UploadFileContent onClick={handleOpenModal} />
              <EmptyFileContent />
              <EmptyFileContent />
            </>
          ) : (
            userProjectsData.map((project) => (
              <CardMyProject
                key={project.id}
                userName={userData?.user.name}
                date={format(new Date(project.created_at), 'dd/MM')}
                tags={project.tags}
              />
            ))
          )}
        </ProjectsContainer>
      </MainContainer>
      <OpenModalCreateNewProject
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </MyProjectsContainer>
  )
}
