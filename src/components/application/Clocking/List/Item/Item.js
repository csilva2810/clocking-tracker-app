import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import moment from 'moment';

import { dangerColor, successColor } from '../../../../../styles/variables';
import { dateFormat } from '../../../../../utils/time';

import Text from '../../../../ui/Text';

const Item = styled.li`
  display: block;
  padding: 16px 8px;

  &:last-child {
    margin-bottom: 100px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.variant1};
  }
`;

const Status = styled.div`
  font-size: 0.8rem;
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
  const { history, clocking } = props;

  function formatClocking() {
    return `${clocking.in} - ${clocking.lunchStart} - ${clocking.lunchEnd} - ${clocking.out}`;
  }

  function handleClick() {
    history.push(`/app/clocking/${encodeURIComponent(clocking.date)}/edit`);
  }

  return (
    <Item onClick={handleClick}>
      <Row>
        <Text scale="h6">
          {clocking.date}{' '}
          <Text as="span" scale="h6" color="variant1">
            {moment(clocking.date, dateFormat).format('ddd')}
          </Text>
        </Text>
      </Row>
      <Row>
        <Text scale="caption" color="variant1">
          {formatClocking()}
        </Text>
        <Text scale="caption" color="variant1">
          Total: {clocking.workedHours}
        </Text>
        <Status danger={clocking.balance.includes('-')}>{clocking.balance}</Status>
      </Row>
    </Item>
  );
};

export default withRouter(ClockingListItem);
