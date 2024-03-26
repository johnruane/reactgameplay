import LineCircle from '../../assets/line-circle';
import GamesSection from '../../components/sections/GamesSection';
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

      <section className='grid hm-intro'>
        <div className='hm-intro-wrapper vertical-padding-25'>
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

      <section className='grid hm-games-section'>
        <div className='gs-heading-wrapper'>
          <LineCircle />
          <p className='gs-heading'>GAMES</p>
        </div>
        <div className='gs-main-wrapper'>
          <GamesSection />
        </div>
      </section>

      <div>
        <p>Ready to level up your coding skills while having a blast?</p>
        <p>
          Choose your game & explore the code. React Gameplay is your go-to destination
          for learning React through play.
        </p>
      </div>

      <div>
        <p>ABOUT</p>
        <div>
          <p>Learning Made Exciting and Interactive</p>
          <p>
            At React Gameplay, I firmly believe that learning should be an engaging and
            hands-on experience. That&apos;s why I&apos;ve meticulously curated a
            selection of well-known games, each tailored to cater to different skill
            levels. Get ready to immerse yourself in a world where fun meets learning.
          </p>
        </div>
        <div>
          <p>Guided Exploration: Your Path to Mastery</p>
          <p>
            Every game in our collection comes with invaluable insights and practical tips
            on fundamental concepts. From mastering state management to implementing
            intricate game mechanics, I&apos;ve got your back every step of the way.
            Together, we&apos;ll navigate through the intricacies of game development with
            confidence.
          </p>
        </div>
        <div>
          <p>Elevate Your Skills While Having Fun</p>
          <p>
            Are you prepared to elevate your coding prowess while embarking on an
            exhilarating journey? Take your pick from our array of games, dive deep into
            the code, and let the adventure begin. Whether you&apos;re here to play or to
            code, React Gameplay is your ultimate destination for a transformative
            learning experience.
          </p>
        </div>
      </div>
    </>
  );
}
