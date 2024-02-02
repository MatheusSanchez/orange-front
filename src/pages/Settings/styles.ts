import { Button } from '@mui/material'
import styled from 'styled-components'

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 5rem;

  svg:first-child {
    position: absolute;
    color: ${(props) => props.theme['color-neutral-90']};
    top: 6.7rem;
    left: 1.5rem;
  }

  @media (min-width: 978px) {
    max-width: 800px;
    margin: 0 auto;
    justify-content: flex-start;
  }
`
export const MainContainer = styled.div`
  min-width: 300px;
  margin-top: 3rem;

  a.Settings {
    margin-top: 1rem;
    display: block;
    text-align: center;
    font-size: 0.7rem;
    color: ${(props) => props.theme['color-neutral-90']};
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 978px) {
      font-size: 0.9rem;
    }
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1.5rem;

  & > * {
    margin-top: 0.5rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h1 {
    width: 150px;
    margin-bottom: 3rem;
    color: ${(props) => props.theme['color-neutral-130']};
    font-size: 1rem;
  }
`

export const StyledButton = styled(Button)`
  background: ${(props) => props.theme['color-secondary-100']} !important;
`
