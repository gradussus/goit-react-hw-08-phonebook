import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

import { Container } from './App.styled';
import RegisterPage from 'pages/Register/Register';
import LoginPage from 'pages/Login/Login';

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </Container>
  );
};
