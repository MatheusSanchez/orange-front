import { Helmet } from 'react-helmet-async'
import { HomeContainer } from './styles'

export function MeusProjetos() {
  return (
    <HomeContainer>
      <Helmet title="Meus Projetos" />
      <h1>Meus Projetos</h1>
    </HomeContainer>
  )
}
