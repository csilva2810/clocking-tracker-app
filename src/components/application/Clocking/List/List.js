import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  color: ${props => props.theme.colors.text.variant1};

  > i {
    display: block;
    margin-bottom: 8px;
    font-size: 5rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
`;

const ClockingList = ({ clocking = [] }) => {
  if (clocking.length) {
    return (
      <List>
        {clocking.map(clocking => (
          <Item key={clocking.date} clocking={clocking} />
        ))}
      </List>
    );
  }

  return (
    <EmptyList>
      <i className="material-icons">emoji_people</i>
      <p>Você ainda não adicionou marcações</p>
    </EmptyList>
  );
};

export default ClockingList;
