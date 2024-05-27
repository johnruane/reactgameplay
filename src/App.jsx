import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DefaultLayout from './components/Layouts/DefaultLayout';
import GameLayout from './components/Layouts/GameLayout';
import Home from '@pages/Home';
import Error404 from '@pages/404';
import GamePage from '@pages/GamePage';

import './styles/reset.css';
import './styles/app.scss';

export default function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  const routes = createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [{ path: '/', element: <Home /> }],
      errorElement: <Error404 />,
    },
    {
      element: <GameLayout />,
      children: [{ path: 'gamepage/:title', element: <GamePage /> }],
      errorElement: <Error404 />,
    },
    { path: '*', element: <Error404 /> },
  ]);

  return <RouterProvider router={routes} />;
}
