import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '../../../components/Footer';
import GetKey from '../../../utils/GetKey';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={GetKey()} />
    </>
  );
}
