import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import './TextLogo.scss';

const TextLogo = () => {
  const mainTextRef = useRef();

  useGSAP(() => {
    gsap.from('.gsap-main-text > span', {
      rotationY: 180,
      stagger: 0.3,
      duration: 0.5,
      scaleX: -1,
      transformOrigin: '40% 50%',
      ease: 'power1.out',
    });
  });

  return (
    <div className='tl-text-container'>
      <div className='tl-text-logo-wrapper'>
        <div className='tl-logo-main-text gsap-main-text' ref={mainTextRef}>
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
        </div>
        <div className='tl-bar-ball-wrapper'>
          <span className='tl-text-pink-bar'></span>
          <span className='tl-text-pink-ball'></span>
        </div>
      </div>
      <span className='tl-logo-sub-text'>GAMEPLAY</span>
    </div>
  );
};

export default TextLogo;
