import styled from 'styled-components'

export const EmptyFileContentContainer = styled.div`
  @media (min-width: 978px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 24.3125rem;
    height: 16.125rem;
    padding: 4.25rem 1.31rem;
    background: ${(props) => props.theme['color-neutral-65']};
    border-radius: 0.25rem;
    width: 24.3125rem;
  }
`
