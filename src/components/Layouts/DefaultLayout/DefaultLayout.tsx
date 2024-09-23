import Footer from '../../Footer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
