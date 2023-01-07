import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshing } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  return isLoggedIn && isRefreshing ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} />
  );
};
