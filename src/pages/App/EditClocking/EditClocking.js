import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import Page from '../../../components/ui/Page';
import Header, { HeaderColumn, HeaderTitle } from '../../../components/ui/Header';
import ClockingForm from '../../../components/application/Clocking/Form';
import IconButton from '../../../components/ui/IconButton';

import { editDay } from '../../../store/clocking';
import { msToTime, dateFormat } from '../../../utils/time';

const EditClocking = ({ history, match }) => {
  const dispatch = useDispatch();
  const clocking = useSelector(({ clocking }) =>
    clocking.data.find(item => new Date(item.date).getTime() === +match.params.date),
  );

  function handleSubmit(data) {
    dispatch(editDay(data));

    history.replace('/app/clocking');
  }

  function getValues() {
    return {
      date: moment(clocking.date).format(dateFormat),
      in: msToTime(clocking.in),
      lunchStart: msToTime(clocking.lunchStart),
      lunchEnd: msToTime(clocking.lunchEnd),
      out: msToTime(clocking.out),
      workedHours: msToTime(clocking.workedHours),
      balance: msToTime(clocking.balance),
    };
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

      <ClockingForm values={getValues()} onSubmit={handleSubmit} editMode={true} />
    </Page>
  );
};

export default EditClocking;
