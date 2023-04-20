import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Header from './common/Header';
import Footer from './common/Footer';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import MbtiTestPage from './pages/MainPage/MbtiTestPage/index';
import MbtiTestResult from './pages/MainPage/MbtiTestResult/index';
import { TokenContext } from './Auth/useAuth';

const Routing: React.FC = (): JSX.Element => {
  const { token } = useContext(TokenContext);
  console.log(token);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={token ? <Navigate to='/' /> : <LoginPage />} />
        <Route path='/signup' element={token ? <Navigate to='/' /> : <SignUpPage />} />
        <Route path='/*' element={<MainPage />} />
        <Route path='/mbtitest' element={<MbtiTestPage />} />
        <Route path='/mbtitestresult' element={<MbtiTestResult />} />
        <Route path='/users/:userId' element={token ? <ProfilePage /> : <Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
