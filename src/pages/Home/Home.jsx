/* Icons */
import Enter from '@icons/Enter';
import Logo from '@icons/Logo';
import LineCircle from '@icons/LineCircle';
/* Sections */
import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/home/Games';
import AboutSection from '@sections/home/About';
import LevelUpSection from '@sections/home/LevelUp';
/* Assets */
import imageUrl from '@assets/homepage_image4.png';

import './Home.scss';

export default function Home() {
  return (
    <>
      <div className='container background-yellow'>
        <section className='hm-main-section'>
          <div className='hm-heading-wrapper'>
            <div className='hm-logo-wrapper'>
              <Logo className='hm-logo' />
            </div>

            <img className='hm-image' src={imageUrl} alt='' />
          </div>
        </section>
      </div>

      {/* <div className='hm-wavy-wrapper'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
        <Enter className='hm-enter-icon icon-shadow' />
      </div> */}
      <div className='hm-wavy-wrapper'>
        {/* <span className='hm-shapes'></span>
        <span className='hm-wave'></span> */}
        <Enter className='hm-enter-icon icon-shadow' />
      </div>

      <div className='container background-black'>
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

      <div className='hm-wavy-wrapper flip-vertical'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      <div className='container background-yellow'>
        <section className='grid hm-levelup-section'>
          <LevelUpSection />
        </section>
      </div>

      <div className='hm-wavy-wrapper'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      <div className='container background-black'>
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
