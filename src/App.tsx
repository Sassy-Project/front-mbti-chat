import { MbtiProvider } from './Context/MbtiContext';
import Routing from './Routing';

const App = () => {
  return (
    <MbtiProvider>
      <Routing />
    </MbtiProvider>
  );
};

export default App;
