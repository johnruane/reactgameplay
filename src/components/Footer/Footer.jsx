import ScrollBar from '@components/ScrollBar';
import ResponsiveSVG from '@components/ResponsiveSVG';
import Invader from '@icons/Invader';

import './Footer.scss';

const Footer = () => {
  return (
    <>
      <ScrollBar text='game-over' />

      <footer className='ft-footer'>
        <section className='container background-teal'>
          <div className='grid ft-footer-wrapper'>
            <div className='ft-content-wrapper' data-stack='space-m'>
              <h2 className='ft-heading'>Hello, I&apos;m John.</h2>
              <div data-stack='space-default'>
                <p className='ft-text'>I&apos;m a Software Engineer from Manchester.</p>
                <p className='ft-text'>
                  React Gameplay is one of my pet projects, born out of a passion and
                  curiosity for coding and creating awesome experiences. After building a
                  couple of simple games in React I thought it would be great if I could
                  share these as a bit for fun for some, and for others as a fun way to
                  learn something new. That is what React Gameplay is: a showcase for some
                  of React&apos;s capabilities and serving as a learning platform for
                  other curious developers.
                </p>
                <p className='ft-text'>
                  I hope you enjoy it and find something useful or inspiring within these
                  simple lines of code.
                </p>
              </div>
            </div>
            <ResponsiveSVG additionalClasses='ft-image'>
              <Invader />
            </ResponsiveSVG>
          </div>
        </section>

        <div className='container ft-footer-links'>
          <div className='grid'>
            <div className='ft-links-wrapper'>
              <a className='ft-links' href='#'>
                GITHUB
              </a>
              <a className='ft-links' href='#'>
                LINKEDIN
              </a>
              <a className='ft-links' href='#'>
                EMAIL
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
