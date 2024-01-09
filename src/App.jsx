import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import './app.css';
import './scss/styles.scss';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
