import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { HeaderButton, HeaderTitle } from '../../../ui/Header';
import { monthYearFormat } from '../../../../utils/time';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
      <HeaderButton onClick={previousMonth}>
        <i className="material-icons">keyboard_arrow_left</i>
      </HeaderButton>
      <HeaderTitle>{getMoment(month).format('MMM - YYYY')}</HeaderTitle>
      <HeaderButton onClick={nextMonth}>
        <i className="material-icons">keyboard_arrow_right</i>
      </HeaderButton>
    </Container>
  );
};

export default MonthSelector;
