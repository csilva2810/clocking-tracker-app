import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from '../../../ui/Avatar';

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

const UserAvatar = ({ history }) => {
  const user = useSelector(state => state.auth.user);

  function handleClick() {
    history.push('/app/profile');
  }

  const avatarProps = user.avatar ? { image: user.avatar } : { name: user.name };

  return (
    <Button onClick={handleClick}>
      <Avatar {...avatarProps} />
    </Button>
  );
};

export default withRouter(UserAvatar);
