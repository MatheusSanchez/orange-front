import { Typography } from '@mui/material'
import styled from 'styled-components'

export const MyProjectsContainer = styled.div``

export const CardProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 978px) {
    margin-top: 5rem;
  }
`

export const MainContainer = styled.main``

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (min-width: 978px) and (max-width: 1276px) {
    margin: 0 auto;
  }

  @media (min-width: 978px) {
    margin-top: 3.5rem;
    max-width: 30rem;
  }
`

export const StyledTypography = styled(Typography)`
  align-self: flex-start !important;
  font-weight: bold !important;
  color: ${(props) => props.theme['color-neutral-110']} !important;
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
