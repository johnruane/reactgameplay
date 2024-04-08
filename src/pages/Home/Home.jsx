import LineCircle from '../../components/Icons/LineCircle';
import Streetfighter from '../../components/Icons/StreetFighter/StreetFighter';
import GamesSection from '../../components/sections/GamesSection';
import About from '../../components/sections/About';
import Enter from '../../components/Icons/Enter';
import imageUrl from '../../assets/homepage_image2.png';

import './Home.scss';

export default function Home() {
  return (
    <>
      <section className='hm-main'>
        <div className='hm-heading-wrapper vertical-padding-25'>
          <h1 className='hm-heading'>
            <div className='hm-heading-top'>
              <span className='hm-heading-text'>REACT</span>
            </div>
            <span className='hm-heading-subtext'> gameplay</span>
          </h1>
          <img className='hm-image' src={imageUrl} />
        </div>
      </section>
      <div className='hm-enter-wrapper'>
        <Enter className='hm-enter-icon icon-shadow' />
      </div>
      <section className='grid hm-intro vertical-padding-25'>
        <div className='hm-intro-wrapper'>
          <p className='hm-intro-heading'>
            Welcome to React Gameplay, where coding meets gaming in the most playful way
            possible!
          </p>
          <p className='hm-intro-subheading'>
            Ever wondered how the old classic games are built? Join me as I delve into the
            fascinating world of game development, starting from ground zero. Together,
            we&apos;ll uncover the secrets behind these beloved classics, unravelling
            their complexities one line of code at a time and bring them to life before
            your very eyes.
          </p>
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
          <About />
        </div>
      </section>
    </>
  );
}
