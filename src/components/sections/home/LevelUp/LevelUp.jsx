import { Link } from 'react-router-dom';

import Potion from '@icons/Potion';
import ExternalLinkArrow from '@icons/ExternalLinkArrow';
import ResponsiveSVG from '@components/ResponsiveSVG';

import './LevelUp.scss';

const LevelUp = () => {
  return (
    <>
      <div className='l-up-text-wrapper' data-stack='space-m-l'>
        <div data-stack>
          <h2 className='l-up-heading'>
            Ready to level up your coding skills while having a blast?
          </h2>
          <p className='l-up-sub-heading'>
            Choose your game & explore the code. React Gameplay is your go-to destination
            for learning React through play.
          </p>
        </div>

        <Link to='#' className='l-up-link'>
          View code repository
          <ExternalLinkArrow />
        </Link>
      </div>

      <ResponsiveSVG additionalClasses='l-up-svg-wrapper' maxWidth='14'>
        <Potion />
      </ResponsiveSVG>
    </>
  );
};

export default LevelUp;
