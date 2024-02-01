import styled from 'styled-components'

export const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  padding: 1rem 1.88rem;
  min-width: 320px;

  @media (min-width: 978px) {
    max-width: 80rem;
    width: 100%;
  }
`
