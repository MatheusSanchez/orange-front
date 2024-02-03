import { Box } from '@mui/material'
import styled from 'styled-components'

export const AlertBoxContainer = styled(Box)`
  width: 20rem !important;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 978px) {
    top: 10%;
  }
`

export const AlertErrorBoxContainer = styled(Box)`
  width: 20rem !important;
  position: absolute;
  top: 9%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 978px) {
    width: 24rem !important;
  }
`
