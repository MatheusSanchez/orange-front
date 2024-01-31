import { Box } from '@mui/material'
import styled from 'styled-components'

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

  a {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.00938rem;
    color: ${(props) => props.theme['color-neutral-110']};
    padding: 0 0.66rem;
  }

  @media (min-width: 978px) {
    width: 55rem;
  }

  @media (max-width: 978px) {
    width: 90%;
    max-width: 400px;
    overflow-y: auto;
    max-height: 80vh;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: left;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 978px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    gap: 1.5rem;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: left;

  @media (min-width: 978px) {
    width: 50%;
  }
`

export const UploadFileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

export const LabelContent = styled.div`
  background: ${(props) => props.theme['color-neutral-70']};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  gap: 1rem;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 0.875rem;
    letter-spacing: 0.01563rem;
    opacity: 0.6;
    color: ${(props) => props.theme['color-neutral-120']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (min-width: 978px) {
  }
`
