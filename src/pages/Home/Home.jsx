import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Enter from '@icons/Enter';

import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/home/Games';
import AboutSection from '@sections/home/About';
import LevelUpSection from '@sections/home/LevelUp';
import Heading from '@sections/Heading';

import TextLogo from '@components/TextLogo';
import WaveDivider from '@components/WaveDivider';

// import imageUrl from '@assets/homepage.png';

import Pacman from '@icons/Pacman';
import PacmanShadow1 from '@icons/PacmanShadow1';
import PacmanShadow2 from '@icons/PacmanShadow2';

import './Home.scss';

export default function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline({ repeat: -1, yoyo: true });
    let tl2 = gsap.timeline({ repeat: -1, yoyo: true, delay: 0.3 });
    let tl3 = gsap.timeline({ repeat: -1, yoyo: true, delay: 0.6 });

    tl1
      .to('.pacman1', {
        y: -30,
        duration: 2,
        ease: 'power1.inOut',
      })
      .to('.pacman1', {
        y: 30,
        duration: 2,
        ease: 'power1.inOut',
      });

    // Animation for the second SVG with a delay
    tl2
      .to('.pacman2', {
        y: -30,
        duration: 2,
        ease: 'power1.inOut',
      })
      .to('.pacman2', {
        y: 30,
        duration: 2,
        ease: 'power1.inOut',
      });

    // Animation for the third SVG with a longer delay
    tl3
      .to('.pacman3', {
        y: -30,
        duration: 2,
        ease: 'power1.inOut',
      })
      .to('.pacman3', {
        y: 30,
        duration: 2,
        ease: 'power1.inOut',
      });

    tl1.play();
    tl2.play();
    tl3.play();
  });

  return (
    <>
      <section className='container background-yellow'>
        <div className='hm-section-wrapper'>
          <div className='hm-text-positioning'>
            <TextLogo />
          </div>
          {/* <img className='hm-image' src={imageUrl} alt='' /> */}
          <div className='hm-image'>
            <Pacman className='pacman1' />
            <PacmanShadow1 className='pacman2' />
            <PacmanShadow2 className='pacman3' />
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
