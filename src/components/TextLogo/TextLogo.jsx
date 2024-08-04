import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

import './TextLogo.scss';

gsap.registerPlugin(MotionPathPlugin);

const TextLogo = () => {
  const timeline = gsap.timeline({ repeat: -1 });

  useGSAP(() => {
    timeline.to(
      '.tl-pink-ball-wrapper > :nth-child(even)',
      {
        y: '-=20',
        duration: 0.4,
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
        },
      },
      0
    );
    timeline.from(
      '.tl-pink-ball-wrapper > :nth-child(odd)',
      {
        y: '-=20',
        duration: 0.4,
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
        },
      },
      0
    );
  }, []);

  return (
    <div className='tl-text-logo-wrapper'>
      <div className='tl-pink-ball-wrapper'>
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
        <span className='tl-pink-ball' />
      </div>
      <div className='tl-logo-main-text'>
        <span>R</span>
        <span>E</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
      </div>
      <div className='tl-bar' />
      <span className='tl-logo-sub-text'>GAMEPLAY</span>
    </div>
  );
};

export default TextLogo;
