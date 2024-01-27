import styled from 'styled-components'

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const LoaderContainer = styled.div`
  position: relative;
`

export const LoaderIcon = styled.div`
  border: 4px solid ${(props) => props.theme['color-neutral-60']};
  border-top: 4px solid ${(props) => props.theme['color-secondary-90']};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
