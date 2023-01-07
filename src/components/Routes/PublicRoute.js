import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const PublicRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : <Component />;
};
