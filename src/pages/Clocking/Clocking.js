import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Fab from '../../components/ui/Fab';
import Header from '../../components/ui/Header';
import Page from '../../components/ui/Page';

import ClockingList from '../../components/application/Clocking/List';
import MonthSelector from '../../components/application/Clocking/MonthSelector';
import MonthSummary from '../../components/application/Clocking/MonthSummary';

import { groupClockingByYearAndMonth } from '../../utils/time';
import { setSelectedMonth } from '../../store/ui';

const Clocking = ({ history }) => {
  const dispatch = useDispatch();
  const clocking = useSelector(state => state.clocking);
  const month = useSelector(state => state.ui.selectedMonth);
  const group = groupClockingByYearAndMonth(clocking);
  const currentClocking = group[month] || [];

  function setMonth(month) {
    dispatch(setSelectedMonth(month));
  }

  return (
    <Page>
      <Header>
        <MonthSelector month={month} onChange={setMonth} />
      </Header>

      <MonthSummary clocking={currentClocking} />

      <ClockingList days={currentClocking} />

      <Fab onClick={() => history.push('/clocking/create')} />
    </Page>
  );
};

export default Clocking;
