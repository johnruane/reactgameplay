import { LinkType } from '../LinkComponent';
import classNames from 'classnames';

import { LinkComponent, Ticker } from '@components';

import MotionHeartSvg from '@motion/Heart';

import useBouncingHead from '@utils/hooks/useBouncingHead';

import styles from './style.module.css';

const Footer = () => {
  useBouncingHead();

  return (
    <>
      <Ticker textOne="GAME" textTwo="OVER" direction="RTL" />

      <footer className={styles['ft-footer']}>
        <section className={classNames('container', 'background-teal')}>
          <div className={classNames('grid', styles['ft-footer-wrapper'])}>
            <div className={styles['ft-content-wrapper']} data-stack="space-m">
              <h2 className={styles['ft-heading']}>Hello, I&apos;m John.</h2>
              <div data-stack="space-default">
                <p className={styles['ft-text']}>
                  I&apos;m a Software Engineer from Manchester.
                </p>
                <p className={styles['ft-text']}>
                  React Gameplay is one of my pet projects, born out of a
                  passion and curiosity for coding and creating awesome
                  experiences. After building a couple of simple games in React
                  I thought it would be great if I could share these as a bit
                  for fun for some, and for others as a fun way to learn
                  something new. That is what React Gameplay is: a showcase for
                  some of React&apos;s capabilities and serving as a learning
                  platform for other curious developers.
                </p>
                <p className={styles['ft-text']}>
                  I hope you enjoy it and find something useful or inspiring
                  within these simple lines of code.
                </p>
              </div>
            </div>

            <div className={styles['ft-image']}>
              <MotionHeartSvg />
            </div>
          </div>
        </section>

        <div className={classNames('container', styles['ft-footer-links'])}>
          <div className="grid">
            <div className={styles['ft-links-wrapper']}>
              <LinkComponent
                label="Github"
                to="https://github.com/johnruane/reactgameplay"
                type={LinkType.EXTERNAL}
                additionalClasses={styles['ft-links']}
              />
              <LinkComponent
                label="LinkedIn"
                to="https://www.linkedin.com/in/john-ruane-587749103"
                type={LinkType.EXTERNAL}
                additionalClasses={styles['ft-links']}
              />
              <LinkComponent
                label="Instagram"
                to="https://www.instagram.com/jbruane"
                type={LinkType.EXTERNAL}
                additionalClasses={styles['ft-links']}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
