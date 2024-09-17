import { Outlet } from 'react-router-dom';

import Footer from '../../Footer';

const DefaultLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
