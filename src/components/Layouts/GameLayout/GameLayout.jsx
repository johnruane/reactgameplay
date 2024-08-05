import { Outlet, ScrollRestoration } from 'react-router-dom';
import Ticker from '../../../components/Ticker';
import Footer from '@components/Footer';
import GetKey from '../../../utils/GetKey';

export default function DefaultLayout() {
  return (
    <>
      <Ticker textOne='INSERT' textTwo='COIN' numberOfItems={16} />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={GetKey()} />
    </>
  );
}
