import styled, { css } from 'styled-components';

export default styled.div`
  flex: 1;
  display: block;
  width: 100%;
  padding: 24px 16px;
  background-color: ${props => props.theme.colors.surface.base};
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -3px 12px 0 rgba(0, 0, 0, 0.05);

  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      box-shadow: 0 -2px 15px 0 rgba(0, 0, 0, 0.2);
    `}
`;
