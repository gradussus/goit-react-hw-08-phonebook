import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Link } from "./Layout.styled"

export const Layout = () => {
    return ( <>
        <Header>
            <nav>
                <Link to={'/contacts'}>Contacts</Link>
                <Link to={'/login'}>Sign in</Link>
                <Link to={'/register'}>Sign up</Link>
            </nav>
        </Header>
        <Suspense
            // fallback={<Loader />}
        >
        <Outlet />
        </Suspense>
        </>
    )
}
