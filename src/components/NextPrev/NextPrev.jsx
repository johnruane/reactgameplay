import { Link } from 'react-router-dom';

import PolygonLeft from '@icons/PolygonLeft';
import PolygonRight from '@icons/PolygonRight';

import gameLinks from '@data/games/gameLinks';
import './NextPrev.scss';

const NextPrev = ({ current }) => {
  const linkIndex = gameLinks.findIndex(({ id }) => id === current);

  return (
    <div className='np-wrapper'>
      {linkIndex !== 0 && (
        <Link
          to={'/' + gameLinks[linkIndex - 1]?.link}
          className='np-link-wrapper'
          key={gameLinks[linkIndex - 1]?.link}
        >
          <PolygonLeft />
          <div className='np-text-wrapper'>
            <span className='np-label'>Previous</span>
            <span className='np-title'>{gameLinks[linkIndex - 1]?.id}</span>
          </div>
        </Link>
      )}
      {linkIndex !== gameLinks.length - 1 && (
        <Link
          to={'/' + gameLinks[linkIndex + 1]?.link}
          className='np-link-wrapper np-next'
          key={gameLinks[linkIndex + 1]?.link}
        >
          <PolygonRight />
          <div className='np-text-wrapper np-next'>
            <span className='np-label'>Next</span>
            <span className='np-title'>{gameLinks[linkIndex + 1]?.id}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default NextPrev;
