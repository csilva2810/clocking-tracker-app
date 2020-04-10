import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../../../components/ui/Page';
import IconButton from '../../../components/ui/IconButton';
import Header, { HeaderColumn, HeaderTitle } from '../../../components/ui/Header';

import ClockingForm from '../../../components/application/Clocking/Form';

import { editDay } from '../../../store/clocking';

const EditClocking = ({ history, match }) => {
  const date = decodeURIComponent(match.params.date);
  const dispatch = useDispatch();
  const clocking = useSelector(({ clocking }) =>
    clocking.data.find(item => item.date === date),
  );

  function handleSubmit(data) {
    dispatch(editDay(data));

    history.replace('/app/clocking');
  }

  if (!clocking) {
    return <Redirect to={'/app/clocking'} />;
  }

  return (
    <Page withHeader={true}>
      <Header>
        <HeaderColumn>
          <IconButton onClick={() => history.push('/app/clocking')} icon="arrow_back" />
          <HeaderTitle>Editar Marcação</HeaderTitle>
        </HeaderColumn>
      </Header>

      <ClockingForm values={clocking} onSubmit={handleSubmit} editMode={true} />
    </Page>
  );
};

export default EditClocking;
