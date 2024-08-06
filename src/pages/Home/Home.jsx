import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/home/Games';
import AboutSection from '@sections/home/About';
import LevelUpSection from '@sections/home/LevelUp';
import Heading from '@sections/Heading';

import TextLogo from '@components/TextLogo';
import Divider from '@components/Divider';
import Banner from '@components/Banner';
import ResponsiveSVG from '@components/ResponsiveSVG';

import Pacman from '@icons/Pacman';

import './Home.scss';

gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const timeline = gsap.timeline({ repeat: -1 });

  useGSAP(() => {
    timeline.to(
      '.pacman-body',
      {
        y: '-=30',
        duration: 1,
        repeat: -1,
        yoyo: true,
      },
      0
    );

    timeline.to(
      '.pacman-shadow',
      {
        transformOrigin: '50% 50%',
        scaleX: '0.9',
        duration: 1,
        repeat: -1,
        yoyo: true,
      },
      0
    );
  }, []);

  return (
    <>
      <section className='container background-yellow'>
        <div className='grid hm-section-wrapper'>
          <div className='hm-text-positioning'>
            <TextLogo />
          </div>

          <ResponsiveSVG additionalClasses='hm-image' maxWidth='40'>
            <Pacman />
          </ResponsiveSVG>
        </div>
      </section>

      <section
        className='container background-yellow hm-intro'
        data-stack='space-3xl-4xl'
      >
        <div className='grid hm-intro-wrapper' data-stack>
          <IntroSection />
        </div>
      </section>

      <Divider color='yellow' background='black' />

      <section className='container background-black hm-games' data-stack='space-3xl-4xl'>
        <div id='games-section' className='grid' data-stack='space-l-xl'>
          <Heading title='GAMES' className='section-heading' />
          <GamesSection additionalClasses='hm-games-content-wrapper' />
        </div>
      </section>

      <Banner />

      <section className='container background-black hm-about'>
        <div className='grid' data-stack='space-l-xl'>
          <Heading title='ABOUT' className='section-heading' />
          <div className='hm-section-content-wrapper hm-about-wrapper'>
            <AboutSection />
          </div>
        </div>
      </section>

      <Divider color='black' background='grey' />

      <section className='container background-grey hm-level-up'>
        <div className='grid'>
          <LevelUpSection />
        </div>
      </section>
    </>
  );
}
