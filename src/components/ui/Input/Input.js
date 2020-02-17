import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import VMasker from 'vanilla-masker';

import Text from '../Text';

export const Label = styled(Text)`
  display: block;
  width: 100%;
  margin-bottom: 4px;
`;

export const Error = styled(Text)`
  display: block;
  width: 100%;
  margin-top: 6px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 0;
  font-size: 1rem;
  outline: none;
  border: none;
  background-color: transparent;
  transition: 0.2s;

  ${({ theme }) =>
    css`
      color: ${theme.colors.text.variant1};
      border-bottom: 1px solid ${theme.colors.divisors.base};

      &::placeholder {
        color: ${theme.colors.text.variant2};
      }

      &:focus {
        border-color: ${theme.colors.primary.base};
        box-shadow: 0 1px 0 0 ${theme.colors.primary.base};
      }
    `}

  &:read-only {
    border-color: transparent !important;
    box-shadow: none !important;
    cursor: default !important;
  }
`;

const Input = ({ label, error, mask, ...inputAttrs }) => {
  const inputRef = useRef();

  useEffect(() => {
    const ref = inputRef.current;

    if (mask && ref) {
      VMasker(ref).maskPattern(mask);
    }

    return () => {
      if (mask && ref) {
        VMasker(ref).unMask();
      }
    };
  }, [mask]);

  return (
    <>
      {label && (
        <Label as="label" htmlFor={inputAttrs.id} scale="body2" weight="bold">
          {label}
        </Label>
      )}

      <StyledInput ref={inputRef} {...inputAttrs} />

      {error && (
        <Error as="label" htmlFor={inputAttrs.id} scale="caption" color="danger">
          {error}
        </Error>
      )}
    </>
  );
};

export default Input;
