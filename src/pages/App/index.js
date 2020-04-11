import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { removeToken, getToken, fetchAuthenticatedUser } from '../../services/auth';
import { setUser, authSuccess } from '../../store/auth';

import PrivateRoute from '../../components/application/PrivateRoute';
import Spinner from '../../components/ui/Spinner';
import PageLoading from '../../components/ui/PageLoading';

import Clocking from './Clocking';
import CreateClocking from './CreateClocking';
import EditClocking from './EditClocking';

import ProfilePage from './Profile';

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /**
   * Effect that tries to authenticate the user when the app is first loaded on a private route
   * If the authentication goes right, the user will be able to keep using the application
   * Otherwise, the user will be redirected to the login page to authenticate again
   */
  useEffect(() => {
    const token = getToken();

    async function fetchUser() {
      try {
        const response = await fetchAuthenticatedUser();

        dispatch(setUser(response.data));
        dispatch(authSuccess());
      } catch {
        removeToken();
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    console.log({
      token,
      user,
      loading,
      error,
    });

    // if we have a token on localStorage and no user on store
    // we must try to get the authenticated user
    // this condition will happen on page refreshs or when the user navigates outside the
    // app and returns back again in another time
    if (token && !user) {
      fetchUser();
      return;
    }

    // if the neither the user nor the token exists, we should the error to true
    // for the application to redirect the user to the login page
    if (!token && !user) {
      setError(true);
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // show a spinner header
  if (loading) {
    return (
      <PageLoading>
        <Spinner color="accent" size="40px" borderWidth="3px" />
      </PageLoading>
    );
  }

  if (error) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <PrivateRoute exact path="/app/clocking" component={Clocking} />
      <PrivateRoute exact path="/app/clocking/create" component={CreateClocking} />
      <PrivateRoute exact path="/app/clocking/:date/edit" component={EditClocking} />

      <PrivateRoute exact path="/app/profile" component={ProfilePage} />
    </>
  );
};

export default App;
