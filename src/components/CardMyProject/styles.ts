import Avatar from '@mui/material/Avatar'
import styled from 'styled-components'

export const CardMyProjectContainer = styled.div`
  max-width: 24.3125rem;
  height: 16.125rem;

  @media (min-width: 978px) {
    width: 24.3125rem;
  }
`

export const CardMyProjectContent = styled.div`
  max-width: 24.3125rem;
  height: 16.125rem;
  background: ${(props) => props.theme['color-neutral-70']};
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (min-width: 978px) {
    width: 24.3125rem;
  }
`

export const OptionContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${(props) => props.theme['color-secondary-70']};
  border-radius: 50%;
`

export const ProjectInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`

export const AvatarContainer = styled(Avatar)`
  width: 40px !important;
  height: 40px !important;

  @media (min-width: 978px) {
    width: 24px !important;
    height: 24px !important;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const NameAndDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.00938rem;
    font-size: 0.85rem;
    color: ${(props) => props.theme['color-neutral-120']};
  }

  @media (min-width: 978px) {
    flex-direction: row;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme['color-neutral-110']};
    }

    p + p::before {
      content: '•';
      margin: 0 0.3rem;
    }
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
