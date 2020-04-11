import React from 'react';
import styled from 'styled-components';

import logo from '../../../assets/images/logo.png';

const Container = styled.a`
  width: ${props => props.size || '64px'};
  height: ${props => props.size || '64px'};
  border: none;
  outline: none;
  text-decoration: none;
  color: currentColor;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = ({ size }) => (
  /*
    Our logo was downloaded for free on icons8.
    We must give the artist the properly credit
  */
  <Container
    size={size}
    target="_blank"
    href="https://icons8.com/icons/set/retro-alarm-clock"
  >
    <Image src={logo} />
  </Container>
);

export default Logo;
