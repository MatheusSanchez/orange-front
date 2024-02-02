import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background: #113;
  min-width: 320px;
`

export const HeaderContent = styled.div`
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 1.88rem;

  @media (max-width: 978px) {
    padding: 1rem 1.88rem;
    margin-left: -16px;
  }
`

export const LogoAndNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.25rem;

  @media (max-width: 978px) {
    gap: 1rem;
  }
`

export const LogoContainer = styled.div`
  img {
    width: 7rem;
    pointer-events: none;
  }
`

export const NavContainerMobile = styled.div`
  display: none;

  @media (max-width: 978px) {
    display: block;
  }
`

export const NavContainer = styled.nav`
  ul {
    display: flex;
    gap: 3rem;

    li {
      list-style: none;

      a {
        text-decoration: none;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.25rem;
        letter-spacing: 0.00938rem;
        color: #fcfdff;
        opacity: 0.9;

        &:hover {
          transition: opacity 0.1s;
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: 978px) {
    display: none;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    color: #fcfdff;
    width: 24px;
    height: 24px;
  }

  @media (max-width: 978px) {
    gap: 0.5rem;
  }
`
