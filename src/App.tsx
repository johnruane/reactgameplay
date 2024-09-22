import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DefaultLayout from '@layouts/DefaultLayout';
import GameLayout from '@layouts/GameLayout';
import GlobalLayout from '@layouts/GlobalLayout';

import Error404 from '@pages/404';
import GamePage from '@pages/GamePage';
import Home from '@pages/Home';

import './styles/app.scss';
import './styles/reset.css';

export default function App() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  const routes = createBrowserRouter([
    {
      element: <GlobalLayout />,
      children: [
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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
