import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Page from "../../components/ui/Page";
import Header, { HeaderButton, HeaderTitle } from "../../components/ui/Header";
import ClockingForm from "../../components/application/Clocking/Form";

import { editDay } from "../../store/clocking";

const EditClocking = ({ history, match }) => {
  const date = decodeURIComponent(match.params.date);
  const clocking = useSelector(state =>
    state.clocking.find(item => item.date === date)
  );
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(editDay(data));

    history.push("/");
  }

  if (!clocking) {
    return <Redirect to={"/"} />;
  }

  return (
    <Page>
      <Header>
        <HeaderButton onClick={() => history.push("/")}>
          <i className="material-icons">arrow_back</i>
        </HeaderButton>
        <HeaderTitle>Editar Marcação</HeaderTitle>
      </Header>

      <ClockingForm values={clocking} onSubmit={handleSubmit} editMode={true} />
    </Page>
  );
};

export default EditClocking;
