import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/home/Games';
import AboutSection from '@sections/home/About';
import LevelUpSection from '@sections/home/LevelUp';
import Heading from '@sections/Heading';

import TextLogo from '@components/TextLogo';
import Divider from '@components/Divider';
import Banner from '@components/Banner';

import Pacman from '@icons/Pacman';

import './Home.scss';

export default function Home() {
  return (
    <>
      <section className='container background-yellow'>
        <div className='hm-section-wrapper'>
          <div className='hm-text-positioning'>
            <TextLogo />
          </div>
          <div className='hm-image fluid-img'>
            <Pacman />
          </div>
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
        <div className='grid' data-stack='space-l-xl'>
          <Heading title='GAMES' className='hm-section-heading-wrapper' />
          <GamesSection additionalClasses='hm-section-content-wrapper' />
        </div>
      </section>

      <Banner />

      <section className='container background-black hm-about'>
        <div className='grid' data-stack='space-l-xl'>
          <Heading title='ABOUT' className='hm-section-heading-wrapper' />
          <div className='hm-section-content-wrapper hm-about-wrapper'>
            <AboutSection />
          </div>
        </div>
      </section>

      <Divider color='black' background='grey' />

      <section className='container background-grey hm-level-up'>
        <div className='grid hm-levelup-section'>
          <LevelUpSection />
        </div>
      </section>
    </>
  );
}
