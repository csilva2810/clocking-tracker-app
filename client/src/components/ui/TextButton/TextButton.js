import styled, { css } from 'styled-components';

export default styled.button`
  padding: 2px 8px;
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;

  ${({ theme, color = 'accent' }) =>
    css`
      color: ${theme.colors[color].base};

      &:hover,
      &:focus {
        background-color: ${theme.colors[color].base}33;
      }
    `}
`;
