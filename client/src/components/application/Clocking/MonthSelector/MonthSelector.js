import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { HeaderTitle } from '../../../ui/Header';
import IconButton from '../../../ui/IconButton';

import { monthYearFormat } from '../../../../utils/time';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid ${props => props.theme.colors.divisors.base};
`;

const MonthSelector = props => {
  const {
    month = moment()
      .format(monthYearFormat)
      .toString(),
    onChange,
  } = props;

  function getMoment(month) {
    return moment(month, monthYearFormat);
  }

  function previousMonth() {
    onChange(
      getMoment(month)
        .subtract(1, 'months')
        .format(monthYearFormat)
        .toString(),
    );
  }

  function nextMonth() {
    onChange(
      getMoment(month)
        .add(1, 'months')
        .format(monthYearFormat)
        .toString(),
    );
  }

  return (
    <Container>
      <IconButton onClick={previousMonth} icon="keyboard_arrow_left" color="primary" />
      <HeaderTitle>{getMoment(month).format('MMM - YYYY')}</HeaderTitle>
      <IconButton onClick={nextMonth} icon="keyboard_arrow_right" color="primary" />
    </Container>
  );
};

export default MonthSelector;
