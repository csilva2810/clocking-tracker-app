import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../../../components/ui/Page';
import EmptyList from '../../../components/ui/EmptyList';
import IconButton from '../../../components/ui/IconButton';
import TextButton from '../../../components/ui/TextButton';
import Header, { HeaderColumn, HeaderTitle } from '../../../components/ui/Header';

import ClockingForm from '../../../components/application/Clocking/Form';

import { editClockingRequest } from '../../../store/clocking';

const EditClocking = ({ history, match }) => {
  const findDate = item => item.date.replace(/[^\d]/gi, '') === match.params.date;
  const dispatch = useDispatch();
  const { clocking, loading, error, success } = useSelector(({ clocking }) => ({
    loading: clocking.loading,
    error: clocking.error,
    success: clocking.success,
    clocking: clocking.data ? clocking.data.find(findDate) : null,
  }));

  function handleSubmit(data) {
    dispatch(editClockingRequest(clocking.id, data));
  }

  function goBack() {
    history.push('/app/clocking');
  }

  function renderContent() {
    if (!clocking) {
      return (
        <EmptyList>
          Marcações não encontradas para essa data.
          <br />
          <br />
          <TextButton type="button" onClick={goBack}>
            Voltar
          </TextButton>
        </EmptyList>
      );
    }

    return (
      <ClockingForm
        values={clocking}
        onSubmit={handleSubmit}
        editMode={true}
        loading={loading}
        error={error}
      />
    );
  }

  if (success) {
    return <Redirect to="/app/clocking" />;
  }

  return (
    <Page withHeader={true}>
      <Header>
        <HeaderColumn>
          <IconButton onClick={goBack} icon="arrow_back" />
          <HeaderTitle>Editar Marcação</HeaderTitle>
        </HeaderColumn>
      </Header>

      {renderContent()}
    </Page>
  );
};

export default EditClocking;
