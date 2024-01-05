import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import './app.css';
import './sass/main.scss';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
