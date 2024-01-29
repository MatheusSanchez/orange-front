import { Button } from '@mui/material'
import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme['btn-gray']} !important;
  color: ${(props) => props.theme['btn-text-gray']} !important;
  font-weight: bold !important;
`
