import styled from 'styled-components';

import { primaryColor } from '../../../styles/variables';

export default styled.header`
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  padding: 0 8px;
  background-color: ${primaryColor};
  color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const HeaderColumn = styled.section`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  padding: 0 8px;
`;
