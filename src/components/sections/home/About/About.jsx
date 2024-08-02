import Cherries from '@icons/Cherries';
import Mushroom from '@icons/Mushroom';
import Key from '@icons/Key';

import './About.scss';

const About = () => {
  return (
    <>
      <div className='ab-text-icon-wrapper fluid-img'>
        <div className='ab-text-wrapper' data-stack='space-default'>
          <h2 className='ab-text-heading'>Learning Made Exciting and Interactive</h2>
          <p className='ab-text'>
            At React Gameplay, I firmly believe that learning should be an engaging and
            hands-on experience. That&apos;s why I&apos;ve meticulously curated a
            selection of well-known games, each tailored to cater to different skill
            levels. Get ready to immerse yourself in a world where fun meets learning.
          </p>
        </div>
        <Cherries className='ab-svg fluid-img' />
      </div>
      <div className='ab-text-icon-wrapper ab-text-icon-wrapper-flip fluid-img'>
        <div className='ab-text-wrapper' data-stack='space-default'>
          <h2 className='ab-text-heading'>Guided Exploration: Your Path to Mastery</h2>
          <p className='ab-text'>
            Every game in our collection comes with invaluable insights and practical tips
            on fundamental concepts. From mastering state management to implementing
            intricate game mechanics, I&apos;ve got your back every step of the way.
            Together, we&apos;ll navigate through the intricacies of game development with
            confidence.
          </p>
        </div>

        <Mushroom className='ab-svg' />
      </div>
      <div className='ab-text-icon-wrapper fluid-img'>
        <div className='ab-text-wrapper' data-stack='space-default'>
          <h2 className='ab-text-heading'>Elevate Your Skills While Having Fun</h2>
          <p className='ab-text'>
            Are you prepared to elevate your coding prowess while embarking on an
            exhilarating journey? Take your pick from our array of games, dive deep into
            the code, and let the adventure begin. Whether you&apos;re here to play or to
            code, React Gameplay is your ultimate destination for a transformative
            learning experience.
          </p>
        </div>

        <Key className='ab-svg' />
      </div>
    </>
  );
};

export default About;
