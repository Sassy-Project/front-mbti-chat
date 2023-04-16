import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Header from './common/Header';
import Footer from './common/Footer';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import MbtiTestPage from './pages/MainPage/MbtiTestPage/index';

const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<MainPage />} />
      <Route path='/mbtiTest' element={<MbtiTestPage />} />
      <Route path='/users' element={<ProfilePage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Routing;
