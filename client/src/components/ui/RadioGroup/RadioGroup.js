import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;

  & + label {
    margin-left: 8px;
  }
`;

const RadioGroup = ({ items = [], selected = '' }) => {
  return items.map(({ label, ...inputAttrs }) => (
    <Label key={inputAttrs.value}>
      <input type="radio" checked={inputAttrs.value === selected} {...inputAttrs} />{' '}
      {label}
    </Label>
  ));
};

export default RadioGroup;
