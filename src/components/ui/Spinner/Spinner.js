import styled, { keyframes, css } from 'styled-components';

import { colorsMap as colors } from '../../../styles/variables';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  border-width: ${props => props.borderWidth || '4px'};
  border-style: solid;
  border-color: currentColor;
  border-radius: 50%;
  animation: ${spin} 1s ease infinite;

  ${({ color }) =>
    color &&
    css`
      border-color: ${colors[color]};
    `}

  border-top-color: transparent;
`;
