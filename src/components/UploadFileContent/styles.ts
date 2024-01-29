import styled from 'styled-components'

export const UploadFileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 24.3125rem;
  height: 16.125rem;
  padding: 4.25rem 1.31rem;
  background: ${(props) => props.theme['color-neutral-70']};
  border-radius: 0.25rem;
  cursor: pointer;

  @media (min-width: 978px) {
    width: 24.3125rem;
  }

  p,
  span {
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.00938rem;
    color: ${(props) => props.theme['color-neutral-110']};
    text-align: center;
  }

  p {
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
  }
`
