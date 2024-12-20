import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Ticker } from '@components';

import './style.scss';

const GlobalLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <Ticker textOne="INSERT" textTwo="COIN" />
      <Outlet />
    </>
  );
};

export default GlobalLayout;
