import Chip from '@mui/material/Chip'

// import projectPlaceholder from '../../assets/projectPlaceholder.jpg'
import { OptionsButton } from './OptionsButton'
import {
  AvatarContainer,
  CardMyProjectContainer,
  CardMyProjectContent,
  NameAndDataContainer,
  OptionContainer,
  ProjectInfoContainer,
  TagsContainer,
  UserInfoContainer,
} from './styles'

interface CardMyProjectProps {
  avatar?: string
  userName?: string
  date?: string
  tags?: string[]
  photo_url?: string
}

export function CardMyProject(props: CardMyProjectProps) {
  return (
    <CardMyProjectContainer>
      <CardMyProjectContent>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${props.photo_url})` }}
        />

        <OptionContainer>
          <OptionsButton />
        </OptionContainer>
      </CardMyProjectContent>
      <ProjectInfoContainer>
        <UserInfoContainer>
          <AvatarContainer src={props.avatar} />
          <NameAndDataContainer>
            <p>{props.userName}</p>
            <p>{props.date}</p>
          </NameAndDataContainer>
        </UserInfoContainer>
        <TagsContainer>
          {props.tags?.map((tag, index) => <Chip key={index} label={tag} />)}
        </TagsContainer>
      </ProjectInfoContainer>
    </CardMyProjectContainer>
  )
}
