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
      <section className='container background-yellow'>
        <div className='hm-section-wrapper'>
          <div className='hm-logo-wrapper'>
            <Logo className='hm-logo' />
          </div>

          <img className='hm-image' src={imageUrl} alt='' />
        </div>
      </section>

      <WaveDivider background='yellow' />

      <section className='container background-black stack hm-into'>
        <div className='grid'>
          {/* <div className='hm-enter-wrapper'>
            <Enter className='hm-enter-icon' />
          </div> */}
          <div className='hm-intro-wrapper'>
            <IntroSection />
          </div>
        </div>

        <div className='grid heading-stack stack'>
          <Heading title='GAMES' className='hm-section-heading-wrapper' />
          <div className='hm-section-content-wrapper'>
            <GamesSection />
          </div>
        </div>
      </section>

      <WaveDivider background='yellow' flipX clean />

      <section className='container background-yellow hm-level-up'>
        <div className='grid hm-levelup-section'>
          <LevelUpSection />
        </div>
      </section>

      <WaveDivider background='yellow' />

      <section className='container background-black hm-about'>
        <div className='grid heading-stack stack'>
          <Heading title='ABOUT' className='hm-section-heading-wrapper' />
          <div className='hm-section-content-wrapper hm-about-wrapper'>
            <AboutSection />
          </div>
        </div>
      </section>
    </>
  );
}
