import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import SeoSync from './components/feature/SeoSync';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <SeoSync />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
