/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext, useState } from 'react'

import { ProjectProps } from '../interfaces/ProjectProps'
import { api } from '../lib/axios'

interface ProjectsProviderProps {
  children: ReactNode
}

interface ProjectsContextType {
  userProjectsData: ProjectProps[]
  getUserProjects: (user_id: string) => Promise<any>
}

export const ProjectsContext = createContext({} as ProjectsContextType)

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [userProjectsData, setUserProjectsData] = useState<ProjectProps[]>([])

  async function getUserProjects(user_id: string) {
    try {
      const res = await api.get(`/projects/${user_id}`)
      const { projects } = res.data
      setUserProjectsData(projects)
    } catch (error) {
      console.error('Erro ao processar a requisição', error)
      throw error
    }
  }

  return (
    <ProjectsContext.Provider value={{ getUserProjects, userProjectsData }}>
      {children}
    </ProjectsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProjects() {
  const context = useContext(ProjectsContext)

  return context
}
