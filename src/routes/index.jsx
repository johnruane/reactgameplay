import { useRoutes } from 'react-router-dom';

import DefaultLayout from '../components/layouts/defaultLayout';

import Home from '../pages/Home';
import Tetris from '../pages/Tetris';
import Snake from '../pages/Snake';
import Error404 from '../pages/404';

export default function Routes() {
  return useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'tetris', element: <Tetris /> },
        { path: 'snake', element: <Snake /> },
      ],
    },
    { path: '*', element: <Error404 /> },
  ]);
}
