import React, { memo, useCallback } from 'react';
import styled from 'styled-components';

import { primaryColor } from '../../../styles/variables';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background-color: white;
  color: ${primaryColor};
  font-size: 1rem;
  font-weight: bold;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Avatar = ({ size = '40px', image = '', name = '' }) => {
  const getInitials = useCallback(
    () =>
      name
        .split(' ')
        .slice(0, 2)
        .map(name => name.substring(0, 1).toUpperCase())
        .join(''),
    [name],
  );

  return (
    <Container size={size}>{image ? <Image src={image} /> : getInitials()}</Container>
  );
};

export default memo(Avatar);
