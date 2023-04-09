import { useEffect } from 'react';
import Routing from './Routing';

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  return <Routing />;
};

export default App;
