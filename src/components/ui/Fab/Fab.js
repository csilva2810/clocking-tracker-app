import React from 'react';
import styled from 'styled-components';

import { accentColor } from '../../../styles/variables';

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 26px;
  background-color: ${accentColor};
  color: white;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.16);
  transition: 0.2s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16),
      0 5px 14px 0 rgba(0, 0, 0, 0.18);
  }
`;

const Fab = ({ children, onClick }) => (
  <Container>
    <Button type="button" onClick={onClick}>
      <i className="material-icons">add</i>
    </Button>
  </Container>
);

export default Fab;
