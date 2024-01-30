import { Helmet } from 'react-helmet-async'

import { FeedContainer } from './styles'

export function Feed() {
  return (
    <FeedContainer>
      <Helmet title="Descobrir" />
      <h1>Descobrir</h1>
      <p>Em construção</p>
    </FeedContainer>
  )
}
