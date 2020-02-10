import React from 'react';
import { useDispatch } from 'react-redux';

import ClockingForm from '../../../components/application/Clocking/Form';

import Page from '../../../components/ui/Page';
import Header, { HeaderColumn, HeaderTitle } from '../../../components/ui/Header';
import IconButton from '../../../components/ui/IconButton';

import { addDay } from '../../../store/clocking';

const NewDay = ({ history }) => {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(addDay(data));

    history.replace('/app/clocking');
  }

  return (
    <Page withHeader={true}>
      <Header>
        <HeaderColumn>
          <IconButton onClick={() => history.push('/')} icon="arrow_back" />
          <HeaderTitle>Nova Marcação</HeaderTitle>
        </HeaderColumn>
      </Header>

      <ClockingForm onSubmit={handleSubmit} />
    </Page>
  );
};

export default NewDay;
