import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;
