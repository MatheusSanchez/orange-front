import styled from 'styled-components'
import { Button } from '@mui/material'

export const SignInContainer = styled.div`
  margin: 6.81rem auto 0;
  padding: 0 1rem;

  > img {
    display: none;
  }

  @media (min-width: 978px) {
    flex-direction: column;
    align-items: center;
    display: grid;
    max-width: 100%;
    grid-template-columns: 1fr 3fr;
    margin-top: 0;
    padding: 0;

    > img {
      pointer-events: none;
      display: block;
      max-height: 100vh;
    }
  }
`

export const SignInContent = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  @media (min-width: 978px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 4rem 0;

    h2 {
      display: none;
    }
  }

  animation: opacidade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes opacidade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const TitleContainer = styled.h1`
  color: ${(props) => props.theme['color-principal-90']};
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;

  @media (min-width: 978px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`

export const GoogleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;

  @media (min-width: 978px) {
    margin: 3rem auto;
  }
`

export const GoogleButton = styled.button`
  width: 12rem;
  padding: 0.69rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.875rem;
  font-weight: bold;
  color: #0000008a;
  background: ${(props) => props.theme['color-neutral-60']};
  border: none;
  border-radius: 0.25rem;
  border: 1px solid #00000000;
  box-shadow:
    1px 1px 1px 0px rgba(0, 0, 0, 0.2),
    0px 0px 1px 0px rgba(0, 0, 0, 0.2);

  > img {
    width: 1.125rem;
    height: 1.125rem;
  }

  &:not(:disabled, :active):hover {
    outline: 3px solid rgba(66, 133, 244, 0.1);
    border: 0.5px solid #4285f4;
    box-shadow: none;
  }

  &:not(:disabled):active {
    background: #eee;
    border: 0.5px solid #00000000;
    box-shadow:
      1px 1px 1px 0px rgba(0, 0, 0, 0.2),
      0px 0px 1px 0px rgba(0, 0, 0, 0.2);
  }

  &:not(:disabled):focus {
    outline:
      3px solid rgba(66, 133, 244, 0.3) 0%,
      rgba(66, 133, 244, 0.3) 100%;
  }

  &:disabled {
    filter: grayscale(100%);
  }
`

export const TextContainer = styled.p`
  color: ${(props) => props.theme['color-neutral-110']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.00938rem;
  margin-bottom: 1.5rem;

  @media (min-width: 978px) {
    font-size: 1.5rem;
  }
`

export const BtnContainer = styled(Button)`
  background: ${(props) => props.theme['color-secondary-100']};
  color: ${(props) => props.theme['color-neutral-60']};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  margin-top: 1rem;
  padding: 0.5rem 1.38rem;

  &:hover {
    background-color: ${(props) => props.theme['color-secondary-110']};
  }
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > span {
    > a {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1rem;
      color: ${(props) => props.theme['color-neutral-100']};
      text-decoration: none;
      object-fit: fill;

      &:hover {
        color: ${(props) => props.theme['color-neutral-110']};
      }
    }
  }
`
