import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Header from './common/Header';
import Footer from './common/Footer';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import MbtiTestPage from './pages/MainPage/MbtiTestPage/index';
import MbtiTestResult from './pages/MainPage/MbtiTestResult/index';
import ChatPage from './pages/ChatPage';
// MbtiProvider를 routes 전체를 감싸지 않는 방법을 찾아야함

const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<MainPage />} />
      <Route path='/chat/:userId' element={<ChatPage />} />
      <Route path='/mbtitest' element={<MbtiTestPage />} />
      <Route path='/mbtitestresult' element={<MbtiTestResult />} />
      <Route path='/users/:userId' element={<ProfilePage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Routing;
