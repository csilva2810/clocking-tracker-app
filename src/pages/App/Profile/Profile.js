import React, { useRef, useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import useForm from '../../../hooks/useForm';
import usePrevious from '../../../hooks/usePrevious';
import { toBase64 } from '../../../utils/file';
import { updateUserRequest } from '../../../store/auth';

import UserAvatar from '../../../components/application/User/UserAvatar';

import Alert from '../../../components/ui/Alert';
import Spinner from '../../../components/ui/Spinner';
import RadioGroup from '../../../components/ui/RadioGroup';
import IconButton from '../../../components/ui/IconButton';
import Input, { Label } from '../../../components/ui/Input';
import { Button, FlatButton } from '../../../components/ui/Button';
import Header, { HeaderColumn, HeaderTitle } from '../../../components/ui/Header';

import * as Styles from './ProfileStyles';

const ProfilePage = ({ history }) => {
  const dispatch = useDispatch();
  const { user, updating, updateError } = useSelector(state => state.auth);

  const prevUser = usePrevious(user);
  const avatarInputRef = useRef();
  const [avatar, setAvatar] = useState(user.avatar || '');
  const [theme, setTheme] = useState(user.config.theme || 'light');

  const userUpdated = prevUser && prevUser !== user;

  const { fields, errors, bindField } = useForm({
    defaultValues: {
      name: user.name || '',
      workloadHours: user.config.workloadHours || '',
    },
    validations: {
      name: {
        required: 'Campo obrigatório',
      },
      workloadHours: {
        required: 'Campo obrigatório',
        validate(value) {
          if (!value || isNaN(Number(value))) {
            return 'Digite apenas números';
          }

          return false;
        },
      },
    },
  });

  useEffect(() => {
    const inputRef = avatarInputRef.current;
    async function handleAvatarChange(e) {
      const avatar = await toBase64(e.target.files[0]);

      setAvatar(avatar);
    }

    inputRef.addEventListener('change', handleAvatarChange);

    return () => {
      inputRef.removeEventListener('change', handleAvatarChange);
    };
  }, []);

  function triggerAvatarDialog(e) {
    avatarInputRef.current.click();
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      updateUserRequest({
        name: fields.name,
        avatar,
        config: {
          workloadHours: fields.workloadHours,
          theme,
        },
      }),
    );
  }

  return (
    <Styles.Page withHeader={true}>
      <Header>
        <HeaderColumn>
          <IconButton onClick={() => history.go(-1)} icon="arrow_back" />
          <HeaderTitle>Perfil</HeaderTitle>
        </HeaderColumn>
      </Header>

      <Styles.Container>
        <Styles.AvatarContainer>
          <FlatButton onClick={triggerAvatarDialog}>
            <UserAvatar isEditable={true} showName={true} avatar={avatar} size="80px" />
          </FlatButton>
        </Styles.AvatarContainer>

        <Styles.BottomMenu>
          <form onSubmit={handleSubmit}>
            <Styles.FileInput
              type="file"
              name="avatar"
              id="avatar"
              accept=".png,.jpeg,.jpg"
              ref={avatarInputRef}
            />

            <Styles.TitleSection>
              <Styles.Title>Dados pessoais</Styles.Title>
            </Styles.TitleSection>

            <Styles.InputGroup>
              <Styles.InputSection>
                <Input
                  label="Nome"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  error={errors.name}
                  {...bindField('name')}
                />
              </Styles.InputSection>

              <Styles.InputSection>
                <Input
                  readOnly
                  label="Email"
                  id="email"
                  name="email"
                  value={user.email}
                />
              </Styles.InputSection>
            </Styles.InputGroup>

            <Styles.TitleSection>
              <Styles.Title>Configurações</Styles.Title>
            </Styles.TitleSection>

            <Styles.InputGroup>
              <Styles.InputSection>
                <Input
                  label="Carga horária"
                  type="tel"
                  id="workloadHours"
                  name="workloadHours"
                  placeholder="8"
                  error={errors.workloadHours}
                  {...bindField('workloadHours')}
                />
              </Styles.InputSection>

              <Styles.InputSection>
                <Label>Tema</Label>

                <br />

                <RadioGroup
                  selected={theme}
                  items={[
                    {
                      label: 'Claro',
                      name: 'theme',
                      value: 'light',
                      onChange: e => setTheme('light'),
                    },
                    {
                      label: 'Escuro',
                      name: 'theme',
                      value: 'dark',
                      onChange: e => setTheme('dark'),
                    },
                  ]}
                />
              </Styles.InputSection>
            </Styles.InputGroup>

            {updateError && (
              <Styles.InputSection>
                <Alert color="danger">Erro ao salvar os dados. Tente novamente.</Alert>
              </Styles.InputSection>
            )}

            {userUpdated && (
              <Styles.InputSection>
                <Alert color="success">Dados salvos com sucesso!</Alert>
              </Styles.InputSection>
            )}

            <Styles.InputSection>
              <Button type="submit" disabled={updating}>
                {updating ? <Spinner /> : 'Salvar'}
              </Button>
            </Styles.InputSection>
          </form>
        </Styles.BottomMenu>
      </Styles.Container>
    </Styles.Page>
  );
};

export default ProfilePage;
