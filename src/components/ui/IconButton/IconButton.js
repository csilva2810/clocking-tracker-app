import React from 'react';
import styled, { css } from 'styled-components';

import { primaryColor, accentColor } from '../../../styles/variables';

const colors = {
  white: '#FFFFFF',
  primary: primaryColor,
  accent: accentColor,
};

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

  ${({ color }) =>
    color &&
    css`
      color: ${colors[color]};

      &:hover,
      &:focus {
        background-color: ${colors[color]}22;
      }
    `}
`;

const IconButton = ({ icon, color, ...buttonAttrs }) => (
  <Button color={color} {...buttonAttrs}>
    <i className="material-icons">{icon}</i>
  </Button>
);

export default IconButton;
