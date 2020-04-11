import styled, { css } from 'styled-components';

export default styled.div`
  display: block;
  padding: 8px 16px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #eee;

  ${({ theme, color }) =>
    color &&
    css`
      color: ${theme.colors[color][theme.mode === 'dark' ? 'text' : 'base']};
      background-color: ${theme.colors[color].base}22;
      border-color: ${theme.colors[color].base}33;
    `}
`;
