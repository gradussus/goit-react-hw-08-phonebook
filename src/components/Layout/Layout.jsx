import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import { Header, Link } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Header>
        <nav>
          <Link to={'/contacts'}>Contacts</Link>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <Link to={'/login'}>Sign in</Link>
              <Link to={'/register'}>Sign up</Link>
            </>
          )}
        </nav>
      </Header>
      <Suspense
      // fallback={<Loader />}
      >
        <Outlet />
      </Suspense>
      <footer>sadflkhjsadflkhj</footer>
    </>
  );
};
