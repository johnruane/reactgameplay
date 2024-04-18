import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../../components/Footer';
import GetKey from '../../../utils/GetKey';

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={GetKey()} />
    </>
  );
}
