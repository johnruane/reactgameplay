import { Link } from 'react-router-dom';
import gameLinks from '@data/games/gameLinks';

const NextPrev = ({ current }) => {
  const linkIndex = gameLinks.findIndex(({ id }) => id === current);

  console.log(linkIndex);

  return (
    <div className='np-wrapper'>
      {linkIndex !== 0 && (
        <Link
          to={'/' + gameLinks[linkIndex - 1]?.link}
          className=''
          key={gameLinks[linkIndex - 1]?.link}
        >
          Prev
        </Link>
      )}
      {linkIndex !== gameLinks.length - 1 && (
        <Link
          to={'/' + gameLinks[linkIndex + 1]?.link}
          className=''
          key={gameLinks[linkIndex + 1]?.link}
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default NextPrev;
