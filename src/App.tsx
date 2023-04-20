import { TokenProvider } from './Auth/useAuth';
import Routing from './Routing';

const App = () => {
  return (
    <TokenProvider>
      <Routing />
    </TokenProvider>
  );
};

export default App;
