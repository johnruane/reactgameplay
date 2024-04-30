import Enter from '@icons/Enter';
import Logo from '@icons/Logo';
import LineCircle from '@icons/LineCircle';

import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/home/Games';
import AboutSection from '@sections/home/About';
import LevelUpSection from '@sections/home/LevelUp';
import Heading from '@sections/Heading';

import WaveDivider from '@components/WaveDivider';

import imageUrl from '@assets/homepage.png';

import './Home.scss';

export default function Home() {
  return (
    <>
      <div className='container background-yellow'>
        <section className='hm-section-wrapper'>
          <div className='hm-logo-wrapper'>
            <Logo className='hm-logo' />
          </div>

          <img className='hm-image' src={imageUrl} alt='' />
        </section>
      </div>

      <WaveDivider background='yellow' />

      <div className='container background-black space-section-xl'>
        <section className='hm-intro-section grid'>
          {/* <div className='hm-enter-wrapper'>
            <Enter className='hm-enter-icon' />
          </div> */}
          <div className='hm-intro-wrapper'>
            <IntroSection />
          </div>
        </section>

        <section className='grid hm-games-section section-heading-spacing'>
          <Heading title='GAMES' className='hm-section-heading-wrapper' />
          <div className='hm-section-content-wrapper'>
            <GamesSection />
          </div>
        </section>
      </div>

      <WaveDivider background='yellow' flipX clean />

      <div className='container background-yellow space-section-l'>
        <section className='grid hm-levelup-section'>
          <LevelUpSection />
        </section>
      </div>

      <WaveDivider background='yellow' />

      <div className='container background-black spacing1'>
        <section className='grid hm-about-section section-heading-spacing'>
          <Heading title='GAMES' className='hm-section-heading-wrapper' />
          <div className='hm-section-content-wrapper hm-about-wrapper'>
            <AboutSection />
          </div>
        </section>
      </div>
    </>
  );
}
