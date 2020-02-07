import React from 'react';
import styled from 'styled-components';

import { timeToMs, msToTime } from '../../../../utils/time';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  background-color: #37474f;
  color: white;
`;

function calculateSummary(clocking = []) {
  return clocking.reduce(
    (prev, current) => ({
      workedHours: timeToMs(current.workedHours) + prev.workedHours,
      balance: timeToMs(current.balance) + prev.balance,
    }),
    {
      workedHours: 0,
      balance: 0,
    },
  );
}

const MonthSummary = ({ clocking }) => {
  const { workedHours, balance } = calculateSummary(clocking);

  return (
    <Container>
      <div>Total: {msToTime(workedHours)}</div>
      <div>Saldo: {msToTime(balance)}</div>
    </Container>
  );
};

export default MonthSummary;
