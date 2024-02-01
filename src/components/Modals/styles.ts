import { Box, Button } from '@mui/material'
import styled from 'styled-components'

export const BoxContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 24px;
  padding: 2rem 1.75rem;
  width: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 4px;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${(props) => props.theme['color-neutral-110']};
    text-align: center;
  }

  img {
    width: 40px;
    height: 40px;
  }
`

const BUTTON_BG_COLOR = {
  save: 'color-secondary-100',
  cancel: 'btn-gray',
} as const

const BUTTON_TXT_COLOR = {
  save: 'color-neutral-60',
  cancel: 'btn-text-gray',
}

interface ColorProps {
  buttoncolor: keyof typeof BUTTON_BG_COLOR
  textcollor: keyof typeof BUTTON_TXT_COLOR
}

export const StyledButton = styled(Button)<ColorProps>`
  background: ${(props) =>
    props.theme[BUTTON_BG_COLOR[props.buttoncolor]]} !important;

  font-weight: bold !important;
  color: ${(props) =>
    props.theme[BUTTON_TXT_COLOR[props.textcollor]]} !important;

  &:disabled {
    background: ${(props) => props.theme['btn-gray']} !important;
    color: ${(props) => props.theme['btn-text-gray']} !important;
  }
`

export const BoxContainerControl = styled.div`
  display: flex;
  gap: 1rem;
`

export const AlertContainer = styled(Box)`
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
