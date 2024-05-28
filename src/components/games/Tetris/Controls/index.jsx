import Button from '../../Components/Button';
import LeftArrow from './Icons/LeftArrow';
import DownArrow from './Icons/DownArrow';
import RotateArrow from './Icons/RotateArrow';
import RightArrow from './Icons/RightArrow';

import './controls.scss';

export default function Controls({ move }) {
  return (
    <div className='tetris-controls'>
      <Button className='tetris-left' onClick={() => move('ArrowLeft')}>
        <LeftArrow />
      </Button>
      <Button className='tetris-down' onClick={() => move('ArrowDown')}>
        <DownArrow />
      </Button>
      <Button className='tetris-rotate' onClick={() => move('Space')}>
        <RotateArrow />
      </Button>
      <Button className='tetris-right' onClick={() => move('ArrowRight')}>
        <RightArrow />
      </Button>
    </div>
  );
}
