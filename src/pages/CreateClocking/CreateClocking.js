import React from 'react';
import { useDispatch } from 'react-redux';

import Page from '../../components/ui/Page';
import Header, { HeaderButton, HeaderTitle } from '../../components/ui/Header';
import ClockingForm from '../../components/application/Clocking/Form';

import { addDay } from '../../store/clocking';

const NewDay = ({ history }) => {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(addDay(data));

    history.push('/');
  }

  return (
    <Page>
      <Header>
        <HeaderButton onClick={() => history.push('/')}>
          <i className="material-icons">arrow_back</i>
        </HeaderButton>
        <HeaderTitle>Nova Marcação</HeaderTitle>
      </Header>

      <ClockingForm onSubmit={handleSubmit} />
    </Page>
  );
};

export default NewDay;
