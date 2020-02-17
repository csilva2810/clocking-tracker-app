import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from '../../../components/application/Clocking/Form';

import Page from '../../../components/ui/Page';
import IconButton from '../../../components/ui/IconButton';
import Header, { HeaderColumn, HeaderTitle } from '../../../components/ui/Header';

import { createClockingRequest, createClockingReset } from '../../../store/clocking';

const CreateClocking = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(({ clocking }) => clocking);

  function handleSubmit(data) {
    dispatch(createClockingRequest(data));
  }

  useEffect(() => {
    dispatch(createClockingReset());
  });

  if (success) {
    return <Redirect to="/app/clocking" />;
  }

  return (
    <Page withHeader={true}>
      <Header>
        <HeaderColumn>
          <IconButton onClick={() => history.replace('/')} icon="arrow_back" />
          <HeaderTitle>Nova Marcação</HeaderTitle>
        </HeaderColumn>
      </Header>

      <Form onSubmit={handleSubmit} loading={loading} error={error} />
    </Page>
  );
};

export default CreateClocking;
