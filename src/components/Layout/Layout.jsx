import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import { Header, Link, Footer, Wrapper, Main } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Wrapper>
      <Header>
        <nav>
          {/* <Link to={'/contacts'}>Contacts</Link> */}
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
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>sadflkhjsadflkhj</Footer>
    </Wrapper>
  );
};
