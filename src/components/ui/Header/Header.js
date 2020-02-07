import styled from 'styled-components';

import { primaryColor } from '../../../styles/variables';

export default styled.header`
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 8px;
  background-color: ${primaryColor};
  color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const HeaderTitle = styled.div`
  padding: 0 8px;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  color: inherit;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
