import { Helmet } from 'react-helmet-async'
import { DescobrirContainer } from './styles'

export function Descobrir() {
  return (
    <DescobrirContainer>
      <Helmet title="Descobrir" />
      <h1>Descobrir</h1>
    </DescobrirContainer>
  )
}
