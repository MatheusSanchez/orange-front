import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { CardMyProject } from '../../components/CardMyProject'
import { SearchTags } from '../../components/SearchTags'
import { ChipData } from '../../interfaces/ChipData'
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
  const [chipData, setChipData] = useState<readonly ChipData[]>([])
  const [projectsData, setProjectsData] = useState<ProjectProps[]>([])

  const buscarProjetosPorTags = async () => {
    try {
      const res = await api.post('/projects/tags', {
        tags: chipData.map((chip) => chip.label),
      })
      setProjectsData(res.data.projects)
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  console.log(projectsData)

  useEffect(() => {
    buscarProjetosPorTags()
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
            />
          ))
        ) : (
          <EmptySearch>Nenhum projeto encontrado</EmptySearch>
        )}
      </ProjectsContainer>
    </FeedContainer>
  )
}
