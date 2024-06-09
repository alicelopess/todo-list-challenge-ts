import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 12.5rem;

  background: ${(props) => props.theme['gray-700']};

  img {
    width: 7.875rem;
    height: 3rem;
  }
`
