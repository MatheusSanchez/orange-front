import { Box } from '@mui/material'
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
