import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import './TextLogo.scss';

const TextLogo = () => {
  const timeline = gsap.timeline({ ease: 'power1.out' });

  useGSAP(() => {
    timeline
      .from('.tl-logo-main-text > :first-child', {
        rotationY: 180,
        transformOrigin: '40% 50%',
      })
      .from('.tl-logo-main-text > span', {
        y: -100,
        stagger: 0.2,
        duration: 0.3,
      })
      .to('.tl-logo-main-text > :first-child', {
        rotationY: 0,
        transformOrigin: '40% 50%',
        duration: 3,
        ease: 'elastic.inOut(2,0.4)',
      });
  }, []);

  return (
    <div className='tl-text-container'>
      <div className='tl-text-logo-wrapper'>
        <div className='tl-logo-main-text'>
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
