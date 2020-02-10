import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../../../components/ui/Page';
import Header, { HeaderColumn, HeaderTitle } from '../../../components/ui/Header';
import ClockingForm from '../../../components/application/Clocking/Form';
import IconButton from '../../../components/ui/IconButton';

import { editDay } from '../../../store/clocking';

const EditClocking = ({ history, match }) => {
  const date = decodeURIComponent(match.params.date);
  const clocking = useSelector(state => state.clocking.find(item => item.date === date));
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(editDay(data));

    history.replace('/app/clocking');
  }

  if (!clocking) {
    return <Redirect to={'/'} />;
  }

  return (
    <Page withHeader={true}>
      <Header>
        <HeaderColumn>
          <IconButton onClick={() => history.push('/')} icon="arrow_back" />
          <HeaderTitle>Editar Marcação</HeaderTitle>
        </HeaderColumn>
      </Header>

      <ClockingForm values={clocking} onSubmit={handleSubmit} editMode={true} />
    </Page>
  );
};

export default EditClocking;
