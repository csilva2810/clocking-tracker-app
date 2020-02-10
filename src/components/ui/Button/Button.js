import styled, { css } from 'styled-components';

import { colorsMap as colors } from '../../../styles/variables';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 48px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;

  ${({ color = 'accent' }) =>
    css`
      background-color: ${colors[color]};
      box-shadow: 0 1px 8px 0 ${colors[color]}44;

      &:hover,
      &:focus {
        box-shadow: 0 1px 8px 0 ${colors[color]}44, 0 2px 10px 0 ${colors[color]}33;
      }
    `}

  ${({ rounded = false }) =>
    rounded &&
    css`
      border-radius: 30px;
    `}

  ${({ sexy = false, color = 'accent' }) =>
    sexy &&
    css`
      border-top-right-radius: 0;

      &:hover,
      &:focus {
        box-shadow: 5px 5px 8px 0 ${colors[color]}44, 6px 6px 8px 0 ${colors[color]}33;
      }
    `}
`;

export const TextButton = styled.button`
  padding: 0 8px;
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;

  ${({ color = 'accent' }) =>
    css`
      color: ${colors[color]};

      &:hover,
      &:focus {
        background-color: ${colors[color]}33;
      }
    `}
`;

export const FlatButton = styled.button`
  font: inherit;
  cursor: pointer;
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
`;
