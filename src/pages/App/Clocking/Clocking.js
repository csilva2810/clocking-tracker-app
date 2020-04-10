import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Fab from '../../../components/ui/Fab';
import Page from '../../../components/ui/Page';
import Spinner from '../../../components/ui/Spinner';
import EmptyList from '../../../components/ui/EmptyList';
import TextButton from '../../../components/ui/TextButton';
import PageLoading from '../../../components/ui/PageLoading';
import Header, { HeaderTitle, HeaderColumn } from '../../../components/ui/Header';

import ClockingList from '../../../components/application/Clocking/List';
import MonthSelector from '../../../components/application/Clocking/MonthSelector';
import MonthSummary from '../../../components/application/Clocking/MonthSummary';
import UserAvatar from '../../../components/application/User/UserAvatar';

import { setSelectedMonth } from '../../../store/ui';
import { fetchClockingRequest, filterByYearAndMonth } from '../../../store/clocking';

const Clocking = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error, clocking, selectedMonth, shouldFetch } = useSelector(state => ({
    error: state.clocking.error,
    loading: state.clocking.loading,
    selectedMonth: state.ui.selectedMonth,
    shouldFetch: state.clocking.data === null,
    clocking: filterByYearAndMonth(state),
  }));

  function setMonth(month) {
    dispatch(setSelectedMonth(month));
  }

  function handleFabClick() {
    history.push('/app/clocking/create');
  }

  function fetchClocking() {
    dispatch(fetchClockingRequest());
  }

  useEffect(() => {
    if (!loading && shouldFetch) {
      fetchClocking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, shouldFetch]);

  if (loading || shouldFetch) {
    return (
      <PageLoading>
        <Spinner color="accent" size="40px" borderWidth="3px" />
      </PageLoading>
    );
  }

  function renderContent() {
    if (error) {
      return (
        <EmptyList>
          Erro ao carregar marcações.
          <br />
          <br />
          <TextButton type="button" onClick={fetchClocking}>
            Tentar novamente.
          </TextButton>
        </EmptyList>
      );
    }

    if (clocking.length > 0) {
      return <ClockingList clocking={clocking} />;
    }

    return (
      <EmptyList>
        <i className="material-icons">emoji_people</i>
        <p>Você ainda não adicionou marcações</p>
      </EmptyList>
    );
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

      <MonthSelector month={selectedMonth} onChange={setMonth} />

      <MonthSummary clocking={clocking} />

      {renderContent()}

      <Fab onClick={handleFabClick} />
    </Page>
  );
};

export default Clocking;
