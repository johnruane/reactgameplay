import { Link } from 'react-router-dom';

import Logo from '@icons/Logo';

import './Header.scss';

const Header = () => {
  return (
    <div className='container background-yellow'>
      <header className='grid'>
        <div className='h-logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
      </header>
      <div className='hm-wavy-wrapper'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>
    </div>
  );
};

export default Header;
