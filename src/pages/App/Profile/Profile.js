import React, { useRef, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';

import useForm from '../../../hooks/useForm';
import { toBase64 } from '../../../utils/file';
import { updateUserRequest, updateUserReset } from '../../../store/auth';
import { setTheme as setThemeAction } from '../../../store/ui';

import UserAvatar from '../../../components/application/User/UserAvatar';

import Text from '../../../components/ui/Text';
import Page from '../../../components/ui/Page';
import Alert from '../../../components/ui/Alert';
import Input from '../../../components/ui/Input';
import Switch from '../../../components/ui/Switch';
import Button from '../../../components/ui/Button';
import Spinner from '../../../components/ui/Spinner';
import BottomMenu from '../../../components/ui/BottomMenu';
import IconButton from '../../../components/ui/IconButton';
import FlatButton from '../../../components/ui/FlatButton';
import Header, { HeaderColumn, HeaderTitle } from '../../../components/ui/Header';

import * as Styles from './ProfileStyles';

const ProfilePage = ({ history }) => {
  const dispatch = useDispatch();
  const { user, updating, updateError, updateSuccess } = useSelector(state => state.auth);

  const avatarInputRef = useRef();
  const [avatar, setAvatar] = useState(user.avatar || '');
  const [theme, setTheme] = useState(user.config.theme || 'light');
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
    if (updateSuccess || updateError) {
      setTimeout(() => {
        dispatch(updateUserReset());
      }, 3000);
    }
  }, [dispatch, updateSuccess, updateError]);

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

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    dispatch(setThemeAction(next));
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
    <Page withHeader={true} alternative={true}>
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

        <BottomMenu style={{ zIndex: 2 }}>
          <form onSubmit={handleSubmit}>
            <Styles.FileInput
              type="file"
              name="avatar"
              id="avatar"
              accept=".png,.jpeg,.jpg"
              ref={avatarInputRef}
            />

            <CSSTransition
              in={updateError || updateSuccess}
              unmountOnExit
              timeout={300}
              classNames="fadeInOut"
            >
              <Styles.TitleSection>
                {updateError ? (
                  <Alert color="danger">Erro ao salvar os dados.</Alert>
                ) : (
                  <Alert color="success">Dados salvos com sucesso!</Alert>
                )}
              </Styles.TitleSection>
            </CSSTransition>

            <Styles.TitleSection>
              <Text scale="h6" weight="bold">
                Dados pessoais
              </Text>
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
              <Text scale="h6" weight="bold">
                Configurações
              </Text>
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

              <Styles.InputSection horizontal>
                <Text as="label" scale="body2">
                  Tema escuro:
                </Text>

                <Switch isOn={theme === 'dark'} color="primary" onClick={toggleTheme} />
              </Styles.InputSection>
            </Styles.InputGroup>

            <Styles.InputSection>
              <Button type="submit" disabled={updating}>
                {updating ? <Spinner /> : 'Salvar'}
              </Button>
            </Styles.InputSection>
          </form>
        </BottomMenu>
      </Styles.Container>
    </Page>
  );
};

export default ProfilePage;
