import styled, { css } from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background.base};

  ${props =>
    props.alternative &&
    css`
      background-color: ${props => props.theme.colors.background.variant1};
    `}

  ${props =>
    props.withHeader &&
    css`
      padding-top: 54px;
    `}
`;
