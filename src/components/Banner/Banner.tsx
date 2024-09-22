import classNames from 'classnames';

import Spaceship from '@svg/home/spaceship.svg?react';
import Stars from '@svg/home/stars.svg?react';

import './Banner.scss';

const Banner = ({ additionalClasses }) => {
  return (
    <div className={classNames('grid background-black', additionalClasses)}>
      <div className="b-wrapper">
        <Stars />
        <p className="b-text nice-wrap">
          “Code your way to the stars and beyond with our gaming challenges.”
        </p>
        <div className="b-spaceship-wrapper fluid-img">
          <Spaceship className="b-spaceship-red" />
          <Spaceship className="b-spaceship-grey" />
          <Spaceship className="b-spaceship-orange" />
          <Spaceship className="b-spaceship-black" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
