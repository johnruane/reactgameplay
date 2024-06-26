import Logo from '@icons/Logo';
import WaveDivider from '@components/WaveDivider';

import './Footer.scss';

const Footer = () => {
  return (
    <>
      <WaveDivider background='teal' icons='teal' flipWaveX flipIconsY />

      <footer className='ft-footer'>
        <div className='hm-wavy-wrapper flip-vertical background-teal'>
          <span className='hm-wavy-pink'></span>
          <span className='hm-wavy-black'></span>
        </div>
        <div className='container background-teal'>
          <div className='grid ft-footer-wrapper'>
            <div className='ft-content-wrapper'>
              <h2 className='ft-heading'>Hello, I&apos;m John Ruane.</h2>
              <div className='ft-text-wrapper' data-stack>
                <p className='ft-text'>
                  I&apos;m a Software Engineer living in Manchester.
                </p>
                <p className='ft-text'>
                  React Gameplay is one of my pet projects, born out of pure passion and
                  curiosity. After building a few simple games in React I thought
                  “Wouldn&apos;t it be great if I could share these in a way that was
                  useful for other developers as a fun way to learn”. That&apos;s when
                  React Gameplay was conceived; showcasing React&apos;s capabilities and
                  serving as a learning platform for other curious developers.
                </p>
                <p className='ft-text'>
                  I hope you enjoy it and find something useful or inspiring within these
                  simple lines of code.
                </p>
              </div>
            </div>
          </div>
          <div className='ft-logo-wrapper'>
            <Logo />
          </div>
        </div>
        <hr className='ft-divider' />
        <div className='container'>
          <div className='grid ft-links-wrapper'>
            <div className='ft-links'>
              <a href='#'>GITHUB</a>
              <a href='#'>LINKEDIN</a>
              <a href='#'>EMAIL</a>
              <a href='#'>BUY ME A COFFEE</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
