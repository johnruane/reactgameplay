import { useEffect } from 'react';

import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

import { DefaultLayout, GameLayout, GlobalLayout } from '@layouts';

import { Error404, GamePage, Home } from '@pages';

import { trackPageView } from './utils/analytics';

import '@styles/app.css';
import '@styles/essentials.css';
import '@styles/reset.css';
import '@styles/spacings.css';

// Component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);

  return null;
}

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

  return (
    <HelmetProvider>
      <PageTracker />
      <RouterProvider router={routes} />
    </HelmetProvider>
  );
}
