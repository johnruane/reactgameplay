import Logo from '../Icons/Logo';
import './Header.scss';

const Header = () => {
  return (
    <div className='container background-yellow'>
      <header className='grid '>
        <div className='h-logo'>
          <Logo />
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
