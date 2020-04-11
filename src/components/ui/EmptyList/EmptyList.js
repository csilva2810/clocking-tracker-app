import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  text-align: center;
  color: ${props => props.theme.colors.text.variant1};

  > i {
    display: block;
    margin-bottom: 8px;
    font-size: 5rem;
  }
`;
