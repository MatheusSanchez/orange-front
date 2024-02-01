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
import { ChipData } from '../../interfaces/ChipData'
import { ProjectProps } from '../../interfaces/ProjectProps'
import { api } from '../../lib/axios'
import {
  CardProfileContainer,
  InputContainer,
  MainContainer,
  MyProjectsContainer,
  ProjectsContainer,
  StyledTypography,
} from './styles'

export function MyProjects() {
  const { userData } = useAuth()
  const [openModal, setOpenModal] = useState(false)
  const [chipData, setChipData] = useState<readonly ChipData[]>([])

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const [userProjectsData, setUserProjectsData] = useState<ProjectProps[]>([])

  const getProjectsByUserId = async () => {
    try {
      const res = await api.post('/projects/tags', {
        tags: chipData.map((chip) => chip.label),
      })

      const userProjects = res.data.projects
        .filter(
          (projeto: ProjectProps) => projeto.user_id === userData?.user.id,
        )
        .sort(
          (a: ProjectProps, b: ProjectProps) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        )

      setUserProjectsData(userProjects)
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  useEffect(() => {
    if (userData?.user.id) {
      getProjectsByUserId()
    }
  }, [chipData])

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
