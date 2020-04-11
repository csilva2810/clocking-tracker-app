import React from 'react';
import styled from 'styled-components';

import { msToTime, calculateSummary } from '../../../../utils/time';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
`;

const MonthSummary = ({ clocking }) => {
  const { workedHours, balance } = calculateSummary(clocking);

  return (
    <Container>
      <div>Total: {msToTime(workedHours)}h</div>
      <div>Saldo: {msToTime(balance)}h</div>
    </Container>
  );
};

export default MonthSummary;
