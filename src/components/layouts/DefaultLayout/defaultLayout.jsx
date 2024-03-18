import { Outlet } from 'react-router-dom';
import Navigation from '../../Navigation';

export default function DefaultLayout() {
  return (
    <>
      {/* <Navigation /> */}
      <Outlet />
    </>
  );
}
