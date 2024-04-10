/* Icons */
import Enter from '@icons/Enter';
import Logo from '@icons/Logo';
import LineCircle from '@icons/LineCircle';
import Streetfighter from '@icons/StreetFighter/StreetFighter';
/* Sections */
import IntroSection from '@sections/home/Intro';
import GamesSection from '@sections/Games';
import AboutSection from '@sections/About';
/* Assets */
import imageUrl from '@assets/homepage_image2.png';

import './Home.scss';

export default function Home() {
  return (
    <>
      <section className='hm-main'>
        <div className='hm-heading-wrapper'>
          <div className='hm-logo-wrapper'>
            <Logo className='hm-logo' />
          </div>

          <img className='hm-image' src={imageUrl} />
        </div>
      </section>
      <div className='hm-enter-wrapper'>
        <Enter className='hm-enter-icon icon-shadow' />
      </div>

      <section className='grid hm-intro'>
        <div className='hm-intro-wrapper'>
          <IntroSection />
        </div>
      </section>

      <section className='grid hm-games'>
        <div className='hm-section-heading-wrapper'>
          <LineCircle />
          <p className='hm-section-heading'>GAMES</p>
        </div>
        <div className='hm-section-content-wrapper'>
          <GamesSection />
        </div>
      </section>

      <section className='grid hm-levelup vertical-padding-25'>
        <div className='hm-levelup-image-wrapper'>
          <Streetfighter />
        </div>
        <div className='hm-levelup-text-wrapper'>
          <p className='hm-levelup-heading'>
            Ready to level up your coding skills while having a blast?
          </p>
          <p className='hm-levelup-sub-heading'>
            Choose your game & explore the code. React Gameplay is your go-to destination
            for learning React through play.
          </p>
        </div>
      </section>

      <section className='grid hm-games vertical-padding-25'>
        <div className='hm-section-heading-wrapper'>
          <LineCircle />
          <p className='hm-section-heading'>ABOUT</p>
        </div>
        <div className='hm-section-content-wrapper hm-about-wrapper'>
          <AboutSection />
        </div>
      </section>
    </>
  );
}
