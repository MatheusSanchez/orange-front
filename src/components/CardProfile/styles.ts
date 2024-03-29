import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1.2rem 0;

  @media (min-width: 978px) {
    max-width: 24rem;
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

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${(props) => props.theme['color-neutral-120']};

    &::first-letter {
      text-transform: uppercase;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${(props) => props.theme['color-neutral-130']};
    opacity: 0.5;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (min-width: 978px) {
    grid-area: B;
  }
`

export const ButtonContainer = styled.div`
  @media (min-width: 978px) {
    grid-area: C;
  }
`
