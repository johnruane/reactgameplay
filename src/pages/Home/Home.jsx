/* Icons */
import Enter from '@icons/Enter';
import Logo from '@icons/Logo';
import LineCircle from '@icons/LineCircle';
/* Sections */
import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/Games';
import AboutSection from '@sections/home/About';
import LevelUpSection from '@sections/home/LevelUp';
/* Assets */
import imageUrl from '@assets/homepage_image4.png';

import './Home.scss';

export default function Home() {
  return (
    <>
      <section className='hm-main-section'>
        <div className='hm-heading-wrapper'>
          <div className='hm-logo-wrapper'>
            <Logo className='hm-logo' />
          </div>

          <img className='hm-image' src={imageUrl} alt='' />
        </div>
      </section>
      <div className='hm-enter-wrapper'>
        <Enter className='hm-enter-icon icon-shadow' />
      </div>

      <div className='container container-black'>
        <section className='grid hm-intro-section'>
          <div className='hm-intro-wrapper'>
            <IntroSection />
          </div>
        </section>

        <section className='grid hm-games-section'>
          <div className='hm-section-heading-wrapper'>
            <LineCircle />
            <p className='hm-section-heading'>GAMES</p>
          </div>
          <div className='hm-section-content-wrapper'>
            <GamesSection />
          </div>
        </section>
      </div>

      <div className='container container-yellow'>
        <section className='grid hm-levelup-section'>
          <LevelUpSection />
        </section>
      </div>

      <div className='container container-black'>
        <section className='grid hm-about-section'>
          <div className='hm-section-heading-wrapper'>
            <LineCircle />
            <p className='hm-section-heading'>ABOUT</p>
          </div>
          <div className='hm-section-content-wrapper hm-about-wrapper'>
            <AboutSection />
          </div>
        </section>
      </div>
    </>
  );
}
