import { Box, DialogActions } from '@mui/material'
import styled from 'styled-components'

export const DialogActionsContainer = styled(DialogActions)`
  padding: 0 0 20px 20px !important;
  justify-content: flex-start !important;
`

export const BoxContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem 1.75rem;
  width: 19rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  border-radius: 4px;

  @media (min-width: 978px) {
    width: 25rem;
    padding: 2.5rem;
  }

  > h2 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${(props) => props.theme['color-neutral-110']};
  }

  > span {
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.03125rem;
    color: ${(props) => props.theme['color-neutral-110']};
  }
`

export const BoxContainerControl = styled.div`
  display: flex;
  gap: 1rem;
`
