import React from 'react';
import styled from 'styled-components';

import { msToTime } from '../../../../utils/time';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
`;

function calculateSummary(clocking = []) {
  return clocking.reduce(
    (prev, current) => ({
      workedHours: current.workedHours + prev.workedHours,
      balance: current.balance + prev.balance,
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
