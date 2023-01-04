
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout'

import { Container } from './App.styled';

const Contacts = lazy(() => import('../pages/Contacts'));


export const App = () => {
  return (
    <Container>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route></Route>
        <Route></Route>
        <Route path='/contacts' element={<Contacts/>}>
        
        </Route>
      </Route>
      </Routes>
      </Container>
  );
};
