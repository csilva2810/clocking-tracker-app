import { css } from 'styled-components';

export default css`
  .fadeInOut-enter {
    opacity: 0;
  }
  .fadeInOut-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .fadeInOut-exit {
    opacity: 1;
  }
  .fadeInOut-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;
