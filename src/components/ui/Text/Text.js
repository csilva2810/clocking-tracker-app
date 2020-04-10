import styled, { css } from 'styled-components';

const scales = {
  h1: '2.5rem',
  h6: '1.1rem',
  body2: '0.9rem',
  caption: '0.8rem',
};

const colors = {
  base: props => props.theme.colors.text.base,
  variant1: props => props.theme.colors.text.variant1,
  danger: props =>
    props.theme.mode === 'dark'
      ? props.theme.colors.danger.text
      : props.theme.colors.danger.base,
};

const textStyles = ({
  color = 'base',
  weight = 'normal',
  align = 'unset',
  scale = 'unset',
}) => css`
  color: ${colors[color]};
  font-weight: ${weight};
  text-align: ${align};
  font-size: ${scales[scale] || 'unset'};
`;

export default styled.p`
  ${textStyles}
`;
