import { Outlet, ScrollRestoration } from 'react-router-dom';
import Ticker from '../../Ticker';
import Footer from '../../Footer';
import GetKey from '../../../utils/GetKey';

export default function DefaultLayout() {
  return (
    <>
      <Ticker textOne='INSERT' textTwo='COIN' />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={GetKey()} />
    </>
  );
}
