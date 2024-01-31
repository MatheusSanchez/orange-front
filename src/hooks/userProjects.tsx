/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext, useState } from 'react'

import { api } from '../lib/axios'

interface ProjectProps {
  id: string
  title: string
  tags: string[]
  link: string
  description: string
  created_at: string
  updated_at: string
  user_id: string
}

interface ProjectsProviderProps {
  children: ReactNode
}

interface ProjectsContextType {
  projectsData: ProjectProps[]
  getUserProjects: (user_id: string | undefined) => Promise<any>
}

export const ProjectsContext = createContext({} as ProjectsContextType)

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [projectsData, setProjectsData] = useState<ProjectProps[]>([])

  async function getUserProjects(user_id: string | undefined) {
    try {
      const res = await api.get(`/projects/${user_id}`)
      const { projects } = res.data

      setProjectsData(projects)
    } catch (error) {
      console.error('Erro ao processar a requisição', error)
      throw error
    }
  }

  return (
    <ProjectsContext.Provider value={{ getUserProjects, projectsData }}>
      {children}
    </ProjectsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProjects() {
  const context = useContext(ProjectsContext)

  return context
}
