import styled from 'styled-components'

export const SignUpContainer = styled.div`
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

export const SignUpContent = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  @media (min-width: 978px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 4rem 0;
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

  h2 {
    display: none;
  }
`

export const TitleContainer = styled.h1`
  color: ${(props) => props.theme['color-principal-90']};
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
  margin-bottom: 1.4rem;

  @media (min-width: 978px) {
    font-size: 3rem;
    line-height: 3.5rem;
    margin-top: 5rem;
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

export const StyledDesktop = styled.div`
  width: 100%;
  margin-top: 16px;

  display: flex;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
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
