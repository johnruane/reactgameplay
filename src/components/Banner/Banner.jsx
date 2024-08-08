import classNames from 'classnames';

import Stars from '@icons/Stars';
import Spaceshop from '@icons/Spaceship';

import './Banner.scss';

const Banner = ({ additionalClasses }) => {
  return (
    <div className={classNames('grid background-black', additionalClasses)}>
      <div className='b-wrapper'>
        <Stars />
        <p className='b-text nice-wrap'>
          “Code your way to the stars and beyond with our gaming challenges.”
        </p>
        <div className='b-spaceship-wrapper fluid-img'>
          <Spaceshop className='b-spaceship-red' />
          <Spaceshop className='b-spaceship-grey' />
          <Spaceshop className='b-spaceship-orange' />
          <Spaceshop className='b-spaceship-black' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
