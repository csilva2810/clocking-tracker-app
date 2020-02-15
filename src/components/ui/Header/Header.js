import styled, { css } from 'styled-components';

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
  color: ${props => props.theme.colors.primary.text};
  background-color: ${props => props.theme.colors.primary.base};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      color: ${props => props.theme.colors.text.base};
      background-color: ${props => props.theme.colors.surface.variant1};
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    `}
`;

export const HeaderColumn = styled.section`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  padding: 0 8px;
`;
