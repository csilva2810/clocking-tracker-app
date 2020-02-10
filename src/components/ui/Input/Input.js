import React from 'react';
import styled, { css } from 'styled-components';

import { primaryColor, accentColor } from '../../../styles/variables';

const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  color: #777;
  font-weight: bold;
  font-size: 0.9rem;
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

  ${props =>
    props.color === 'primary' &&
    css`
      &:focus {
        border-color: ${primaryColor};
        box-shadow: 0 1px 0 0 ${primaryColor};
      }
    `}

  ${props =>
    props.color === 'accent' &&
    css`
      &:focus {
        border-color: ${accentColor};
        box-shadow: 0 1px 0 0 ${accentColor};
      }
    `}
`;

const Input = ({ label, color = 'primary', ...inputAttrs }) => (
  <div>
    {label && <Label htmlFor={inputAttrs.id}>{label}</Label>}
    <StyledInput color={color} {...inputAttrs} />
  </div>
);

export default Input;
