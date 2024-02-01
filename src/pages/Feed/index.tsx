import { Helmet } from 'react-helmet-async'

import { CardMyProject } from '../../components/CardMyProject'
import { SearchTags } from '../../components/SearchTags'
import {
  FeedContainer,
  InputContainer,
  ProjectsContainer,
  SloganContainer,
} from './styles'

export function Feed() {
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
        <SearchTags />
      </InputContainer>
      <ProjectsContainer>
        <CardMyProject />
        <CardMyProject />
        <CardMyProject />
        <CardMyProject />
      </ProjectsContainer>
    </FeedContainer>
  )
}
