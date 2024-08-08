import Cherries from '@icons/Cherries';
import Mushroom from '@icons/Mushroom';
import Key from '@icons/Key';

import './About.scss';

const About = () => {
  return (
    <>
      <div className='ab-text-icon-wrapper'>
        <div className='ab-text-wrapper' data-stack='space-default'>
          <h2 className='ab-text-heading'>Learning made exciting and interactive</h2>
          <p className='ab-text'>
            At React Gameplay, I believe that learning should be an engaging and hands-on
            experience. That&apos;s why I&apos;ve meticulously curated a selection of
            well-known games, each tailored to cater to different skill levels. Get ready
            to find yourself in a project where fun and learning come together.
          </p>
        </div>

        <Cherries className='ab-svg fluid-img' />
      </div>
      <div className='ab-text-icon-wrapper ab-text-icon-wrapper-flip'>
        <div className='ab-text-wrapper' data-stack='space-default'>
          <h2 className='ab-text-heading'>Guided exploration: Your path to mastery</h2>
          <p className='ab-text'>
            Every game in our collection comes with insights and practical tips on
            fundamental concepts in React and coding archetecture. From mastering state
            management to implementing game mechanics, I&apos;ve got your back every step
            of the way. Together, we&apos;ll navigate through the complexities of React &
            game development with confidence.
          </p>
        </div>

        <Mushroom className='ab-svg fluid-img' />
      </div>
      <div className='ab-text-icon-wrapper'>
        <div className='ab-text-wrapper' data-stack='space-default'>
          <h2 className='ab-text-heading'>Elevate your skills while having fun</h2>
          <p className='ab-text'>
            Are you prepared to level-up your coding expertise? Take your pick from our
            array of games, dive into the code, and let the journey begin. Whether
            you&apos;re here just to play or to code, React Gameplay is your destination
            for a first-rate experience. What you do with any of this is up to you.
          </p>
        </div>

        <Key className='ab-svg fluid-img' />
      </div>
    </>
  );
};

export default About;
