import styled from 'styled-components'

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme['color-error-100']} !important;
  font-weight: bold !important;
  text-align: center;
  display: flex;
  align-self: center;
`
