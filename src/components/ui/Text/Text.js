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
  danger: props => props.theme.colors.danger.text,
};

export default styled.p`
  ${({ color = 'base' }) =>
    css`
      color: ${colors[color]};
    `}

  ${({ weight = 'normal' }) => css`
    font-weight: ${weight};
  `}

  ${({ align = 'inherit' }) => css`
    text-align: ${align};
  `}

  ${({ scale }) =>
    scale &&
    css`
      font-size: ${scales[scale]};
    `}
`;
