import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/auth-operations';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { lazy } from 'react';

const Home = lazy(() => import('views/HomeViews/HomeViews'));
const Contacts = lazy(() => import('views/ContactsViews'));
const Register = lazy(() => import('views/RegisterView.module.js/RegisterView'));
const Login = lazy(() => import('views/LoginViews/LoginViews'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/login" component={<Register />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
