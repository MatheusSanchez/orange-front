import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { CardMyProject } from '../../components/CardMyProject'
import { OpenModalViewProject } from '../../components/OpenModalViewProject'
import { SearchTags } from '../../components/SearchTags'
import { ChipData } from '../../interfaces/ChipData'
import { ModalState } from '../../interfaces/ModalState'
import { ProjectProps } from '../../interfaces/ProjectProps'
import { api } from '../../lib/axios'
import {
  EmptySearch,
  FeedContainer,
  InputContainer,
  ProjectsContainer,
  SloganContainer,
} from './styles'

export function Feed() {
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
  const [chipData, setChipData] = useState<readonly ChipData[]>([])
  const [projectsData, setProjectsData] = useState<ProjectProps[]>([])

  const searchProjectByTags = async () => {
    try {
      const res = await api.post('/projects/tags', {
        tags: chipData.map((chip) => chip.label),
      })

      const allProjects = res.data.projects

      const allProjectsSorted = allProjects.sort(
        (a: ProjectProps, b: ProjectProps) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      )

      setProjectsData(allProjectsSorted)
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

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

  useEffect(() => {
    searchProjectByTags()
  }, [chipData])

  return (
    <FeedContainer>
      <Helmet title="Descobrir" />
      <SloganContainer>
        <h1>
          Junte-se à comunidade de inovação, inspiração e descobertas,
          transformando experiências em conexões inesquecíveis
        </h1>
      </SloganContainer>
      <InputContainer>
        <SearchTags chipData={chipData} setChipData={setChipData} />
      </InputContainer>
      <ProjectsContainer>
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <CardMyProject
              key={project.id}
              userName={project.user_id}
              date={format(new Date(project.created_at), 'dd/MM')}
              tags={project.tags}
              project_id={project.id}
              blockOptions
              onClick={() => handleProjectClick(project)}
            />
          ))
        ) : (
          <EmptySearch>Nenhum projeto encontrado</EmptySearch>
        )}
      </ProjectsContainer>
      <OpenModalViewProject {...modalState} />
    </FeedContainer>
  )
}
