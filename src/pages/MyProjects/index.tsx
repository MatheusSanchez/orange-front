import { Helmet } from 'react-helmet-async'
import { MyProjectsContainer } from './styles'

export function MyProjects() {
  return (
    <MyProjectsContainer>
      <Helmet title="Meus Projetos" />
      <h1>Meus Projetos</h1>
    </MyProjectsContainer>
  )
}
