import { GlobalProvider } from './GlobalContext';
import AppRouter from './App';

ReactDOM.render(
  <GlobalProvider>
    <AppRouter />
  </GlobalProvider>,
  document.getElementById('root')
);
