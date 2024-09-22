import useLogoAnimation from './useLogoAnimation';

import './TextLogo.scss';

const TextLogo = () => {
  useLogoAnimation();

  return (
    <div className="tl-text-logo-wrapper">
      <div className="tl-pink-ball-wrapper">
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
        <span className="tl-pink-ball" />
      </div>
      <div className="tl-logo-main-text">
        <span>R</span>
        <span>E</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
      </div>
      <div className="tl-bar" />
      <span className="tl-logo-sub-text">GAMEPLAY</span>
    </div>
  );
};

export default TextLogo;
