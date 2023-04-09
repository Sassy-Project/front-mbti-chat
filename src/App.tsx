import { useEffect } from 'react';
import Routing from './Routing';
import Header from './common/Header';

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  return (
    <>
      <Header />
      <Routing />
    </>
  );
};

export default App;
