import { Outlet } from 'react-router-dom';
import Navigation from '../../Navigation';
import style from './gameLayout.module.css';

export default function DefaultLayout() {
  return (
    <>
      <Navigation />
      <div className={style.layout}>
        <div className='container py-5'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
