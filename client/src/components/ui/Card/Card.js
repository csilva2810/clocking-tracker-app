import styled from 'styled-components';

export const Card = styled.div`
  display: block;
  width: 100%;
  background-color: ${props => props.theme.colors.surface.base};
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  border: 1px solid ${props => props.theme.colors.divisors.base};
`;
