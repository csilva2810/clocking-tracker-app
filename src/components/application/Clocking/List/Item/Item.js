import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import moment from 'moment';

import { dangerColor, successColor } from '../../../../../styles/variables';
import { dateFormat } from '../../../../../utils/time';

const Item = styled.li`
  display: block;
  padding: 16px 8px;

  &:last-child {
    margin-bottom: 100px;
  }
`;

const Title = styled.h1`
  font-size: 1.1rem;
`;

const Subtitle = styled.p`
  color: #777;
  font-size: 0.8rem;
`;

const Status = styled(Subtitle)`
  padding: 2px 4px;
  background-color: ${successColor}22;
  color: ${successColor};
  text-align: center;
  border-radius: 4px;

  ${({ danger }) =>
    danger &&
    css`
      background-color: ${dangerColor}22;
      color: ${dangerColor};
    `}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`;

const ClockingListItem = props => {
  const { history, day } = props;

  function formatClocking() {
    return `${day.in} - ${day.lunchStart} - ${day.lunchEnd} - ${day.out}`;
  }

  function handleClick() {
    history.push(`/app/clocking/${encodeURIComponent(day.date)}/edit`);
  }

  return (
    <Item onClick={handleClick}>
      <Row>
        <Title>
          {day.date}{' '}
          <Subtitle as="span">{moment(day.date, dateFormat).format('ddd')}</Subtitle>
        </Title>
      </Row>
      <Row>
        <Subtitle>{formatClocking()}</Subtitle>
        <Subtitle>Total: {day.workedHours}</Subtitle>
        <Status danger={day.balance.includes('-')}>{day.balance}</Status>
      </Row>
    </Item>
  );
};

export default withRouter(ClockingListItem);
