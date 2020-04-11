import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { loginRequest, signupRequest, reset } from '../../store/auth';

import Text from '../../components/ui/Text';
import Page from '../../components/ui/Page';
import Logo from '../../components/ui/Logo';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import TextButton from '../../components/ui/TextButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 0 auto;
  width: 400px;
  max-width: 100%;
  height: 100%;

  form {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const FormSection = styled.section`
  margin-bottom: 16px;
  padding: 0 16px;

  &:first-child {
    padding-top: 32px;
  }

  &:last-child {
    padding-top: 16px;
    padding-bottom: 32px;
    margin-bottom: 0;
  }
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector(state => state.auth);
  const [mode, setMode] = useState('login');
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    const authenticate = mode === 'login' ? loginRequest : signupRequest;

    dispatch(authenticate(state));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  function toggleMode() {
    const nextState = mode === 'login' ? 'signup' : 'login';
    setMode(nextState);
    dispatch(reset());
  }

  if (user) {
    return <Redirect to="/app/clocking" />;
  }

  const text = {
    login: {
      title: 'Entrar',
      button: 'Entrar',
      error: 'Login falhou 😕. Tente novamente.',
      footer: 'Não tem uma conta?',
      footerButton: 'Criar conta',
    },
    signup: {
      title: 'Criar conta',
      button: 'Criar conta',
      error: 'Erro ao criar conta 😕. Tente novamente.',
      footer: 'Já tem uma conta?',
      footerButton: 'Entrar',
    },
  };

  return (
    <Page>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <Title>
              <Text scale="h1" weight="bold">
                {text[mode].title}
              </Text>
              <Logo size="40px" />
            </Title>
          </FormSection>

          {mode === 'signup' && (
            <FormSection>
              <Input
                label="Nome"
                type="text"
                id="name"
                name="name"
                placeholder="José da Silva"
                value={state.name}
                onChange={handleChange}
              />
            </FormSection>
          )}

          <FormSection>
            <Input
              label="E-mail"
              type="text"
              id="email"
              name="email"
              placeholder="josedasilva@gmail.com"
              value={state.email}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection>
            <Input
              label="Senha"
              type="password"
              id="password"
              name="password"
              placeholder="Sua senha super secreta"
              value={state.password}
              onChange={handleChange}
            />
          </FormSection>

          {error && (
            <FormSection>
              <Text color="danger" align="center">
                {text[mode].error}
              </Text>
            </FormSection>
          )}

          <FormSection>
            <Button type="submit" disabled={loading} sexy rounded>
              {!loading ? text[mode].button : <Spinner />}
            </Button>
          </FormSection>

          <FormSection>
            {text[mode].footer}{' '}
            <TextButton type="button" onClick={toggleMode} color="primary">
              {text[mode].footerButton}
            </TextButton>
          </FormSection>
        </form>
      </Container>
    </Page>
  );
};

export default LoginPage;
