import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Avatar from '../../../ui/Avatar';
import Text from '../../../ui/Text';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Edit = styled.div`
  position: absolute;
  top: ${props => props.size};
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: -14px;
  padding: 3px 4px;
  width: 60px;
  height: auto;
  color: ${props => props.theme.colors.primary.base};
  background-color: ${props => props.theme.colors.surface.base};
  font-size: 0.8rem;
  text-align: center;
  border-radius: 22px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

const UserName = styled.div`
  margin-top: 16px;
`;

const UserAvatar = ({
  isEditable = false,
  showName = false,
  size = '40px',
  avatar = '',
}) => {
  const user = useSelector(state => state.auth.user);
  const props = {
    size,
    name: user.name,
    image: avatar || user.avatar,
  };

  return (
    <Container>
      {isEditable && <Edit size={size}>Alterar</Edit>}

      <Avatar {...props} />

      {showName && (
        <UserName>
          <Text scale="h6">{user.name}</Text>
        </UserName>
      )}
    </Container>
  );
};

export default UserAvatar;
