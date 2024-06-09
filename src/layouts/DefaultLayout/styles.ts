import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;

  background: ${(props) => props.theme['gray-700']};

  img {
    width: 126px;
    height: 48px;
  }
`
