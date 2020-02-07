import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginRequest } from '../../store/auth';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector(state => state.auth);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      loginRequest({
        email: state.email,
        password: state.password,
      }),
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  if (user) {
    return <Redirect to="/clocking" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>Login failed. Try again...</div>}
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="johndoe@gmail.com"
          value={state.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="your secret password"
          value={state.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit" disabled={loading}>
          {loading ? 'wait...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
