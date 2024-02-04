import Chip from '@mui/material/Chip'

import { CardMyProjectProps } from '../../interfaces/CardMyProjectProps'
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

export function CardMyProject(props: CardMyProjectProps) {
  const handleProjectClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <CardMyProjectContainer onClick={handleProjectClick}>
      <CardMyProjectContent>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${props.photo_url})` }}
        />
        {props.blockOptions ?? (
          <OptionContainer>
            <OptionsButton project_id={props.project_id} />
          </OptionContainer>
        )}
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
