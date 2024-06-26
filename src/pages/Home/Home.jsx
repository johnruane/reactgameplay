import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

import Enter from '@icons/Enter';

import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/home/Games';
import AboutSection from '@sections/home/About';
import LevelUpSection from '@sections/home/LevelUp';
import Heading from '@sections/Heading';

import TextLogo from '@components/TextLogo';
import WaveDivider from '@components/WaveDivider';

import Pacman from '@icons/Pacman';
import PacmanShadow1 from '@icons/PacmanShadow1';
import PacmanShadow2 from '@icons/PacmanShadow2';

import './Home.scss';

gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const timeline = gsap.timeline({ repeat: -1 });

  useGSAP(() => {
    timeline.to(
      '.pacman',
      {
        y: '+=10',
        duration: 1,
        ease: 'sine.inOut',
        stagger: {
          each: 0.3,
          repeat: -1,
          yoyo: true,
        },
      },
      0
    );
    timeline.fromTo(
      '.pacman',
      {
        x: '-=40',
        duration: 6,
        ease: 'power3.inOut',
        stagger: {
          each: 0.6,
          repeat: -1,
          yoyo: true,
        },
      },
      {
        x: '+=60',
        duration: 6,
        ease: 'power3.inOut',
        stagger: {
          each: 0.6,
          repeat: -1,
          yoyo: true,
        },
      },
      0
    );
  }, []);

  useGSAP(() => {
    gsap.to('.enter-arrow', {
      y: '+=5',
      repeat: -1,
      ease: 'sine.inOut',
      duration: 1,
      yoyo: true,
    });
  }, []);

  return (
    <>
      <section className='container background-yellow'>
        <div className='hm-section-wrapper'>
          <div className='hm-text-positioning'>
            <TextLogo />
          </div>
          {/* <img className='hm-image' src={imageUrl} alt='' /> */}
          <div className='hm-image'>
            <Pacman className='pacman' />
            <PacmanShadow1 className='pacman' />
            <PacmanShadow2 className='pacman' />
          </div>
        </div>
      </section>

      <WaveDivider background='yellow' icons='black' />

      <div className='hm-enter-wrapper'>
        <Enter className='hm-enter-icon' />
      </div>
      <section className='container background-black hm-intro' data-stack='space-3xl-4xl'>
        <div className='grid'>
          <div className='hm-intro-wrapper'>
            <IntroSection />
          </div>
        </div>

        <div className='grid' data-stack='space-l-xl'>
          <Heading title='GAMES' className='hm-section-heading-wrapper' />
          <div className='hm-section-content-wrapper'>
            <GamesSection />
          </div>
        </div>
      </section>

      <WaveDivider background='yellow' flipWaveX />

      <section className='container background-yellow hm-level-up'>
        <div className='grid hm-levelup-section'>
          <LevelUpSection />
        </div>
      </section>

      <WaveDivider background='yellow' icons='black' />

      <section className='container background-black hm-about'>
        <div className='grid' data-stack='space-l-xl'>
          <Heading title='ABOUT' className='hm-section-heading-wrapper' />
          <div className='hm-section-content-wrapper hm-about-wrapper'>
            <AboutSection />
          </div>
        </div>
      </section>
    </>
  );
}
