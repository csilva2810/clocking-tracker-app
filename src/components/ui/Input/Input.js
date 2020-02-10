import React from 'react';
import styled, { css } from 'styled-components';

import { colorsMap as colors, dangerColor } from '../../../styles/variables';

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const Error = styled.label`
  display: block;
  width: 100%;
  margin-top: 4px;
  font-size: 0.8rem;
  color: ${dangerColor};
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 0;
  color: #777;
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  transition: 0.2s;

  &::placeholder {
    color: #bbb;
  }

  ${({ color }) =>
    css`
      &:focus {
        border-color: ${colors[color]};
        box-shadow: 0 1px 0 0 ${colors[color]};
      }
    `}

  &:read-only {
    background-color: #fff !important;
    border-color: #fff !important;
    box-shadow: none !important;
    cursor: default !important;
  }
`;

const Input = ({ label, error, color = 'primary', ...inputAttrs }) => (
  <>
    {label && <Label htmlFor={inputAttrs.id}>{label}</Label>}

    <StyledInput color={color} {...inputAttrs} />

    {error && <Error htmlFor={inputAttrs.id}>{error}</Error>}
  </>
);

export default Input;
