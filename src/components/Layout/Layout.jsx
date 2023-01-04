import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Link } from "./Layout.styled"

export const Layout = () => {
    return ( <>
        <Header>
            <nav>
                <Link to={'/contacts'}>Contacts</Link>
                <Link></Link>
                <Link></Link>
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
