import { LinkComponent, Ticker } from '@components';

import useBouncingHead from '@hooks/useBouncingHead';

import Star from '@svg/global/star.svg?react';

import './style.scss';

const Footer = () => {
  useBouncingHead();

  return (
    <>
      <Ticker textOne="GAME" textTwo="OVER" direction="RTL" />

      <footer className="ft-footer gsap-bouncing">
        <section className="container background-teal">
          <div className="grid ft-footer-wrapper">
            <div className="ft-content-wrapper" data-stack="space-m">
              <h2 className="ft-heading">Hello, I&apos;m John.</h2>
              <div data-stack="space-default">
                <p className="ft-text">
                  I&apos;m a Software Engineer from Manchester.
                </p>
                <p className="ft-text">
                  React Gameplay is one of my pet projects, born out of a
                  passion and curiosity for coding and creating awesome
                  experiences. After building a couple of simple games in React
                  I thought it would be great if I could share these as a bit
                  for fun for some, and for others as a fun way to learn
                  something new. That is what React Gameplay is: a showcase for
                  some of React&apos;s capabilities and serving as a learning
                  platform for other curious developers.
                </p>
                <p className="ft-text">
                  I hope you enjoy it and find something useful or inspiring
                  within these simple lines of code.
                </p>
              </div>
            </div>

            <Star className="ft-image fluid-img" />
          </div>
        </section>

        <div className="container ft-footer-links">
          <div className="grid">
            <div className="ft-links-wrapper">
              <LinkComponent
                label="Github"
                to="https://github.com/johnruane/reactgameplay"
                newWindow={true}
                additionalClasses="ft-links"
              />
              <LinkComponent
                label="LinkedIn"
                to="https://www.linkedin.com/in/john-ruane-587749103"
                newWindow={true}
                additionalClasses="ft-links"
              />
              <LinkComponent
                label="Instagram"
                to="https://www.instagram.com/jbruane"
                newWindow={true}
                additionalClasses="ft-links"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
