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
  color: #777;

  > i {
    display: block;
    margin-bottom: 8px;
    font-size: 5rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  background-color: #fff;
`;

const ClockingList = ({ days = [] }) => {
  if (days.length) {
    return (
      <List>
        {days.map(day => (
          <Item key={day.date} day={day} />
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
