import styled, { css } from 'styled-components';

const Switch = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  max-width: 48px;
  min-width: 48px;
  height: 30px;
  padding: 2px 3px;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.gray.base};
  border: 1px solid ${props => props.theme.colors.gray.variant1};

  &:before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  ${({ isOn, theme, color = 'accent' }) =>
    isOn &&
    css`
      border-color: ${theme.colors[color].variant1};
      background-color: ${theme.colors[color].variant1};

      &:before {
        transform: translateX(18px);
      }
    `}
`;

export default Switch;
