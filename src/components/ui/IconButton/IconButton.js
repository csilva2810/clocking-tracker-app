import React from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  color: inherit;

  &:hover,
  &:focus {
    background-color: rgba(51, 51, 51, 0.1);
  }

  ${({ theme, color }) =>
    color &&
    css`
      color: ${theme.colors[color].base};

      &:hover,
      &:focus {
        background-color: ${theme.colors[color].base}22;
      }
    `}
`;

const IconButton = ({ icon, color, ...buttonAttrs }) => (
  <Button color={color} {...buttonAttrs}>
    <i className="material-icons">{icon}</i>
  </Button>
);

export default IconButton;
