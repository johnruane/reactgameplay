import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';

const GameLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default GameLayout;
