import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const List = styled.ul`
  list-style: none;
  margin: 0;
`;

const ClockingList = ({ clocking = [] }) => {
  return (
    <List>
      {clocking.map(clocking => (
        <Item key={clocking.date} clocking={clocking} />
      ))}
    </List>
  );
};

export default ClockingList;
