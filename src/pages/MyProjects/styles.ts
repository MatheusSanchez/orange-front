import { Box } from '@mui/material'
import styled from 'styled-components'

export const MyProjectsContainer = styled.div`
  max-width: 80rem;
`

export const ButtonAndModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: ${(props) => props.theme['color-neutral-60']};
  padding: 1.5rem;
  border-radius: 4px;

  h2 {
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${(props) => props.theme['color-neutral-110']};
  }

  p,
  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.00938rem;
    color: ${(props) => props.theme['color-neutral-110']};
  }

  @media (min-width: 978px) {
    width: 55rem;
  }
`

export const UploadFileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.4rem;

  @media (min-width: 978px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const UploadFileInput = styled.div`
  background: ${(props) => props.theme['color-neutral-70']};
  width: 100%;
  height: 16rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: aboslute;
    object-fit: cover;
    border-radius: 4px;
  }

  input[type='file'] {
    display: none;
  }

  @media (min-width: 978px) {
    height: 19.4rem;
  }
`
