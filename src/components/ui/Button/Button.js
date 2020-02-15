import styled, { css } from 'styled-components';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 48px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;

  ${({ theme, color = 'accent' }) =>
    css`
      color: ${theme.colors[color].text};
      background-color: ${theme.colors[color].base};
      box-shadow: 0 1px 8px 0 ${theme.colors[color].base}44;

      &:hover,
      &:focus {
        box-shadow: 0 1px 8px 0 ${theme.colors[color].base}44,
          0 2px 10px 0 ${theme.colors[color].base}33;
      }
    `}

  ${({ rounded = false }) =>
    rounded &&
    css`
      border-radius: 30px;
    `}

  ${({ theme, sexy = false, color = 'accent' }) =>
    sexy &&
    css`
      border-top-right-radius: 0;

      &:hover,
      &:focus {
        box-shadow: 5px 5px 8px 0 ${theme.colors[color].base}44,
          6px 6px 8px 0 ${theme.colors[color].base}33;
      }
    `}

    ${({ theme }) =>
      theme.mode === 'dark' &&
      css`
        box-shadow: none !important;
      `}
`;
