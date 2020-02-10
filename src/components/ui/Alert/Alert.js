import styled, { css } from 'styled-components';

import { colorsMap as colors } from '../../../styles/variables';

export default styled.div`
  display: block;
  padding: 8px 16px;
  text-align: center;
  font-size: 0.95rem;
  border-radius: 6px;
  border: 1px solid #eee;

  ${({ color }) =>
    color &&
    css`
      color: ${colors[color]};
      background-color: ${colors[color]}11;
      border-color: ${colors[color]}22;
    `}
`;
