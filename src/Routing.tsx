import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
