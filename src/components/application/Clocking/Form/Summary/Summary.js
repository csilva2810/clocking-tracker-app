import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16);
`;

const CardTitle = styled.div`
  padding: 8px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`;

const CardBody = styled.div`
  padding: 16px 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin: 8px auto;
  text-align: center;

  ${Card} + ${Card} {
    margin-left: 8px;
  }
`;

const Summary = ({ workedHours, balance }) => (
  <Container>
    <Card>
      <CardTitle>Horas trabalhadas</CardTitle>
      <CardBody>{workedHours}</CardBody>
    </Card>
    <Card>
      <CardTitle>Saldo</CardTitle>
      <CardBody>{balance}</CardBody>
    </Card>
  </Container>
);

export default Summary;
