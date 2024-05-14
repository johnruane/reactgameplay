import './TextLogo.scss';

const TextLogo = () => {
  return (
    <div className='hm-text-container'>
      <div className='hm-text-logo-wrapper'>
        <span className='hm-logo-main-text'>REACT</span>
        <div className='hm-bar-ball-wrapper'>
          <span className='hm-text-pink-bar'></span>
          <span className='hm-text-pink-ball'></span>
        </div>
      </div>
      <span className='hm-logo-sub-text'>GAMEPLAY</span>
    </div>
  );
};

export default TextLogo;
