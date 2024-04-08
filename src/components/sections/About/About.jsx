import ArrowKeys from '../../Icons/ArrowKeys/ArrowKeys';
import Space from '../../Icons/Space';
import Control from '../../Icons/Control';
import './About.scss';

const About = () => {
  return (
    <>
      <div className='ab-text-icon-wrapper'>
        <div className='ab-text-wrapper'>
          <p className='ab-text-heading'>Learning Made Exciting and Interactive</p>
          <p>
            At React Gameplay, I firmly believe that learning should be an engaging and
            hands-on experience. That&apos;s why I&apos;ve meticulously curated a
            selection of well-known games, each tailored to cater to different skill
            levels. Get ready to immerse yourself in a world where fun meets learning.
          </p>
        </div>
        <div className='ab-icon-wrapper'>
          <ArrowKeys />
        </div>
      </div>
      <div className='ab-text-icon-wrapper'>
        <div className='ab-text-wrapper'>
          <p className='ab-text-heading'>Guided Exploration: Your Path to Mastery</p>
          <p>
            Every game in our collection comes with invaluable insights and practical tips
            on fundamental concepts. From mastering state management to implementing
            intricate game mechanics, I&apos;ve got your back every step of the way.
            Together, we&apos;ll navigate through the intricacies of game development with
            confidence.
          </p>
        </div>
        <div className='ab-icon-wrapper'>
          <Space className='icon-shadow' />
        </div>
      </div>
      <div className='ab-text-icon-wrapper'>
        <div className='ab-text-wrapper'>
          <p className='ab-text-heading'>Elevate Your Skills While Having Fun</p>
          <p>
            Are you prepared to elevate your coding prowess while embarking on an
            exhilarating journey? Take your pick from our array of games, dive deep into
            the code, and let the adventure begin. Whether you&apos;re here to play or to
            code, React Gameplay is your ultimate destination for a transformative
            learning experience.
          </p>
        </div>
        <div className='ab-icon-wrapper'>
          <Control className='icon-shadow' />
        </div>
      </div>
    </>
  );
};

export default About;
