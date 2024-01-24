import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 978px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'A B'
      'A C';
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  @media (min-width: 978px) {
    grid-area: A;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${(props) => props.theme['color-neutral-120']};
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${(props) => props.theme['color-neutral-130']};
    opacity: 0.5;
  }

  @media (min-width: 978px) {
    grid-area: B;
  }
`

export const BtnContainer = styled.div`
  @media (min-width: 978px) {
    grid-area: C;
  }
`
