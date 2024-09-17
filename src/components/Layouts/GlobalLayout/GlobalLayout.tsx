// import { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import Ticker from '@components/Ticker';
import GetKey from '@utils/GetKey';

import './GlobalLayout.scss';
// import classNames from 'classnames';

const GlobalLayout = () => {
  // const location = useLocation();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, [location]);

  return (
    <>
      {/* <div
        className={classNames('loading', {
          ['active']: isLoading,
        })}
      /> */}

      <ScrollRestoration getKey={GetKey()} />
      <Ticker textOne='INSERT' textTwo='COIN' />
      <Outlet />
    </>
  );
};

export default GlobalLayout;
