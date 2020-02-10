import styled, { css } from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  ${props =>
    props.withHeader &&
    css`
      padding-top: 54px;
    `}
`;
