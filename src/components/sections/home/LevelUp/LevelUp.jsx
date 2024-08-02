import { Link } from 'react-router-dom';

import Potion from '@icons/Potion';
import ExternalLinkArrow from '@icons/ExternalLinkArrow';

import './LevelUp.scss';

const LevelUp = () => {
  return (
    <>
      <div className='l-up-text-wrapper' data-stack='space-l'>
        <h2 className='l-up-heading'>
          Ready to level up your coding skills while having a blast?
        </h2>
        <p className='l-up-sub-heading'>
          Choose your game & explore the code. React Gameplay is your go-to destination
          for learning React through play.
        </p>

        <Link to='#' className='l-up-link'>
          View code repository
          <ExternalLinkArrow />
        </Link>
      </div>

      <Potion className='l-up-svg' />
    </>
  );
};

export default LevelUp;
