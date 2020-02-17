import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Fab from '../../../components/ui/Fab';
import Page from '../../../components/ui/Page';
import Spinner from '../../../components/ui/Spinner';
import PageLoading from '../../../components/ui/PageLoading';
import Header, { HeaderTitle, HeaderColumn } from '../../../components/ui/Header';

import ClockingList from '../../../components/application/Clocking/List';
import MonthSelector from '../../../components/application/Clocking/MonthSelector';
import MonthSummary from '../../../components/application/Clocking/MonthSummary';
import UserAvatar from '../../../components/application/User/UserAvatar';

import { groupClockingByYearAndMonth } from '../../../utils/time';
import { setSelectedMonth } from '../../../store/ui';
import { fetchClockingRequest } from '../../../store/clocking';

const Clocking = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error, clocking, month } = useSelector(state => ({
    error: state.clocking.error,
    clocking: state.clocking.data,
    loading: state.clocking.loading,
    month: state.ui.selectedMonth,
  }));
  const group = groupClockingByYearAndMonth(clocking);
  const currentClocking = group[month] || [];

  useEffect(() => {
    if (!loading && clocking.length === 0) {
      dispatch(fetchClockingRequest());
    }
  }, [clocking.length, dispatch, loading]);

  function setMonth(month) {
    dispatch(setSelectedMonth(month));
  }

  function handleFabClick() {
    history.push('/app/clocking/create');
  }

  if (loading) {
    return (
      <PageLoading>
        <Spinner />
      </PageLoading>
    );
  }

  if (error) {
    return 'Erro ao carregar marcações. Tente novamente.';
  }

  return (
    <Page withHeader>
      <Header>
        <HeaderColumn>
          <HeaderTitle>Marcações</HeaderTitle>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/app/profile">
            <UserAvatar />
          </Link>
        </HeaderColumn>
      </Header>

      <MonthSelector month={month} onChange={setMonth} />
      <MonthSummary clocking={currentClocking} />

      <ClockingList clocking={currentClocking} />

      <Fab onClick={handleFabClick} />
    </Page>
  );
};

export default Clocking;
