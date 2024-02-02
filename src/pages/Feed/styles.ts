import styled from 'styled-components'

export const FeedContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
`

export const SloganContainer = styled.div`
  margin: 2.5rem auto auto;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
  }

  @media (min-width: 978px) {
    width: 100%;
    max-width: 700px;
    margin: 6rem auto auto;

    h1 {
      font-size: 2rem;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (min-width: 978px) and (max-width: 1276px) {
    margin: 0 auto;
  }

  @media (min-width: 978px) {
    margin-top: 6rem;
    max-width: 40rem;
  }
`

export const ProjectsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;

  @media (min-width: 978px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2.5rem;
    gap: 1.5rem;
  }

  @media (min-width: 978px) and (max-width: 1276px) {
    justify-content: center;
  }
`

export const EmptySearch = styled.p`
  color: ${(props) => props.theme['color-principal-100']} !important;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-self: center;
`
