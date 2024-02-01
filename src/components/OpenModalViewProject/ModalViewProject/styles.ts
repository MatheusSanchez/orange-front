import { Box } from '@mui/material'
import styled from 'styled-components'

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  color: ${(props) => props.theme['color-neutral-130']};
  background-color: #fff;
  border: none;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  cursor: pointer;
`
export const DistanceButton = styled.div`
  @media (max-width: 978px) {
    margin-bottom: 2rem;
  }
`

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: ${(props) => props.theme['color-neutral-60']};
  padding: 6rem;
  border-radius: 4px;

  h4 {
    margin-top: 1.25rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${(props) => props.theme['color-neutral-130']};
  }

  h2 {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${(props) => props.theme['color-neutral-110']};
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${(props) => props.theme['color-neutral-120']};
    flex: 1;
    text-align: center;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.03125rem;
    padding: 0;
    color: ${(props) => props.theme['color-neutral-120']};
  }

  @media (min-width: 978px) {
    width: 65rem;
    height: 90%;
    overflow-y: auto;
  }

  @media (max-width: 978px) {
    width: 90%;
    max-width: 400px;
    overflow-y: auto;
    max-height: 80vh;
    padding: 0.5rem;
  }
`
export const CardProfile = styled.div`
  display: flex;

  margin-bottom: 2rem;
`
export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme['color-neutral-120']};

    &::first-letter {
      text-transform: uppercase;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['color-neutral-130']};
    opacity: 0.5;
    text-align: left;
    padding: 0;
    margin-top: 0.2rem;
  }
`

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.125rem;

  border-radius: 1.25rem;
  padding: 0.5rem;
  margin-right: 0.5rem;

  color: ${(props) => props.theme['color-principal-100']};
  background-color: ${(props) => props.theme['btn-gray']};

  width: fit-content;
  white-space: nowrap;
`
export const ImageBanner = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`
