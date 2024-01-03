import { Link, Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <main className='flex h-full min-h-screen items-center bg-gray-100 dark:bg-slate-900'>
      <p>DefaultLayout</p>
      <div id='sidebar'>
        <nav>
          <ul>
            <li>
              <Link to={`/tetris`}>Tetris</Link>
            </li>
            <li>
              <Link to={`/snake`}>Snake</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </main>
  );
}
