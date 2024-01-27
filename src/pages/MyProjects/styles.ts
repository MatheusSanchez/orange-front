import { Typography } from '@mui/material'
import styled from 'styled-components'

export const MyProjectsContainer = styled.div``

export const StyledTypography = styled(Typography)`
  align-self: flex-start;
  margin-bottom: 10px;
`

export const UploadFileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.4rem;
  align-self: flex-start;
`
export const EmptyProject = styled.div`
  width: 23.8rem;
  height: 15.8rem;
  background-color: ${(props) => props.theme['color-neutral-60']};
  margin-top: 1.4rem;
  margin-left: 1rem;
`

export const ProjectsContainer = styled.div`
  display: flex;

  @media (max-width: 978px) {
    & > ${EmptyProject}:nth-child(n+2) {
      display: none;
    }
  }
`
