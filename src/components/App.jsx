import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/selectors';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <div className='text-center'>Refreshing user...</div>
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<b>404</b>} />
      </Route>
    </Routes>
  );
};
