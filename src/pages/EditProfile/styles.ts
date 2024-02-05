import { Button } from '@mui/material'
import styled from 'styled-components'

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 5rem;

  @media (min-width: 978px) {
    max-width: 800px;
    margin: 0 auto;
    justify-content: flex-start;
  }
`

export const AvatarContainer = styled.div`
  position: relative;
  width: 122px;
  height: 122px;
  margin-bottom: 1.5rem;

  > img {
    border-radius: 50%;
    width: 122px;
    height: 122px;
  }

  > label {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    right: 0;
    color: ${(props) => props.theme['color-neutral-60']};
    background-color: ${(props) => props.theme['color-secondary-100']};
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;

    input {
      display: none;
    }
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;

  a.AccountSettings {
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

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & > * {
    margin-top: 0.5rem;
  }

  @media (min-width: 978px) {
    flex-direction: row;
    gap: 2rem;

    div {
      width: 100%;
    }
  }
`

export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

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
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: ${(props) => props.theme['color-neutral-120']};
  }

  > p {
    width: 150px;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['color-neutral-90']};
    font-size: 0.75rem;

    @media (min-width: 978px) {
      width: 100%;
    }
  }
`

export const StyledButton = styled(Button)`
  background: ${(props) => props.theme['color-secondary-100']} !important;
  margin-top: 1.5rem !important;

  &:disabled {
    background: ${(props) => props.theme['btn-gray']} !important;
    color: ${(props) => props.theme['btn-text-gray']} !important;
  }
`
