import ScrollBar from '@components/ScrollBar';

import Invader from '@icons/Invader';
import Shadow from '@icons/Shadow';

import './Footer.scss';

const Footer = () => {
  return (
    <>
      <ScrollBar text='game-over' />

      <footer className='ft-footer'>
        <section className='container background-teal'>
          <div className='grid ft-footer-wrapper'>
            <div className='ft-content-wrapper' data-stack='space-m'>
              <h2 className='ft-heading'>Hello, I&apos;m John Ruane.</h2>
              <div data-stack='space-default'>
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
            <div className='ft-image'>
              <Invader />
              <Shadow />
            </div>
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
