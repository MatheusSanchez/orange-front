/* eslint-disable react-hooks/exhaustive-deps */
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ThreeDots } from 'react-loader-spinner'

import { CardMyProject } from '../../components/CardMyProject'
import { CardProfile } from '../../components/CardProfile'
import { OpenModalCreateNewProject } from '../../components/OpenModalCreateNewProject'
import { OpenModalViewProject } from '../../components/OpenModalViewProject'
import { SearchTags } from '../../components/SearchTags'
import { UploadFileContent } from '../../components/UploadFileContent'
import { EmptyFileContent } from '../../components/UploadFileContent/EmptyFileContent'
import { useAuth } from '../../hooks/auth'
import { ChipData } from '../../interfaces/ChipData'
import { ProjectProps } from '../../interfaces/ProjectProps'
import { api } from '../../lib/axios'
import {
  CardProfileContainer,
  EmptySearch,
  InputContainer,
  LoaderContainer,
  MainContainer,
  MyProjectsContainer,
  ProjectsContainer,
  StyledTypography,
} from './styles'

export function MyProjects() {
  const { userData } = useAuth()
  const [openModal, setOpenModal] = useState(false)
  const [chipData, setChipData] = useState<readonly ChipData[]>([])
  const [loadingInfo, setLoadingInfo] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const [userProjectsData, setUserProjectsData] = useState<ProjectProps[]>([])

  const getUserProjects = async () => {
    setLoadingInfo(true)
    try {
      const tags = chipData.map((chip) => chip.label.toLowerCase())
      const res = await api.get(`/projects/${userData?.user.id}`)
      const { projects } = res.data

      const filteredProjects =
        tags.length === 0
          ? projects
          : projects.filter((projeto: ProjectProps) =>
              projeto.tags.some((tag) => tags.includes(tag.toLowerCase())),
            )

      const projectsSorted = filteredProjects.sort(
        (a: ProjectProps, b: ProjectProps) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      )

      setUserProjectsData(projectsSorted)
    } catch (error) {
      console.error('Erro ao processar a requisição', error)
      throw error
    } finally {
      setLoadingInfo(false)
    }
  }

  useEffect(() => {
    if (userData?.user.id) {
      getUserProjects()
    }
  }, [chipData])

  interface ModalState {
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    projectInfo: {
      title: string
      tags: string
      link: string
      description: string
    }
    imageBanner: string
  }

  const [modalState, setModalState] = useState<ModalState>({
    openModal: false,
    setOpenModal: () =>
      setModalState((prev) => ({ ...prev, openModal: false })),
    projectInfo: {
      title: '',
      tags: '',
      link: '',
      description: '',
    },
    imageBanner: '',
  })

  function handleProjectClick(project: ProjectProps) {
    setModalState({
      ...modalState,
      openModal: true,
      projectInfo: {
        title: project.title,
        tags: project.tags.join(', '),
        link: project.link,
        description: project.description,
      },
      imageBanner: project.photo_url,
    })
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
          <SearchTags chipData={chipData} setChipData={setChipData} />
        </InputContainer>

        <ProjectsContainer>
          {loadingInfo ? (
            <LoaderContainer>
              <ThreeDots
                height="100"
                width="100"
                color="#ff8833"
                radius="1"
                ariaLabel="tail-spin-loading"
              />
            </LoaderContainer>
          ) : (
            <>
              {userProjectsData.length === 0 && chipData.length === 0 ? (
                <>
                  <UploadFileContent onClick={handleOpenModal} />
                  <EmptyFileContent />
                  <EmptyFileContent />
                </>
              ) : (
                <>
                  {userProjectsData.map((project) => (
                    <CardMyProject
                      key={project.id}
                      userName={userData?.user.name}
                      date={format(new Date(project.created_at), 'dd/MM')}
                      tags={project.tags}
                      photo_url={project.photo_url}
                      project_id={project.id}
                      onClick={() => handleProjectClick(project)}
                    />
                  ))}
                  {chipData.length >= 1 && userProjectsData.length === 0 && (
                    <EmptySearch>Nenhum projeto encontrado</EmptySearch>
                  )}
                </>
              )}
            </>
          )}
        </ProjectsContainer>
      </MainContainer>
      <OpenModalViewProject {...modalState} />
      <OpenModalCreateNewProject
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </MyProjectsContainer>
  )
}
