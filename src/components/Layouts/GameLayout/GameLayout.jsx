import { Outlet, ScrollRestoration } from 'react-router-dom';
import ScrollBar from '../../../components/ScrollBar';
import Footer from '@components/Footer';
import GetKey from '../../../utils/GetKey';

export default function DefaultLayout() {
  return (
    <>
      <ScrollBar text='insert-coin' />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={GetKey()} />
    </>
  );
}
