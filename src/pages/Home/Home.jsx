import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/home/Games';
import AboutSection from '@sections/home/About';
import LevelUpSection from '@sections/home/LevelUp';
import Heading from '@sections/Heading';

import TextLogo from '@components/TextLogo';
import WaveDivider from '@components/WaveDivider';

import Pacman from '@icons/Pacman';
import Shadow from '@icons/Shadow';

import './Home.scss';

export default function Home() {

  return (
    <>
      <section className='container background-yellow'>
        <div className='hm-section-wrapper'>
          <div className='hm-text-positioning'>
            <TextLogo />
          </div>
          <div className='hm-image'>
            <Pacman className='pacman' />
            <Shadow />
          </div>
        </div>
      </section>

      <section className='container background-yellow hm-intro' data-stack='space-3xl-4xl'>
        <div className='grid'>
          <div className='hm-intro-wrapper'>
            <IntroSection />
          </div>
        </div>
      </section>

      <section className='container background-black' data-stack='space-3xl-4xl'>
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
