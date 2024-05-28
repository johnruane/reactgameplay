import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Gameover from '@components/Gameover';
import GetKey from '../../../utils/GetKey';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Gameover />
      <Footer />
      <ScrollRestoration getKey={GetKey()} />
    </>
  );
}
