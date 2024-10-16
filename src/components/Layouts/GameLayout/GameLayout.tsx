import { Outlet } from 'react-router-dom';

import { Footer } from '@components';

const GameLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default GameLayout;
