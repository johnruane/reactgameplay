import Button from '../../Components/Button';

import LeftArrow from './Icons/LeftArrow';
import DownArrow from './Icons/DownArrow';
import UpArrow from './Icons/UpArrow';
import RightArrow from './Icons/RightArrow';

import './controls.scss';

export default function Controls({ move }) {
  return (
    <div className='snake-controls'>
      <Button buttonClass='snake-left' onClick={() => move('ArrowLeft')}>
        <LeftArrow />
      </Button>
      <Button buttonClass='snake-down' onClick={() => move('ArrowDown')}>
        <DownArrow />
      </Button>
      <Button buttonClass='snake-up' onClick={() => move('ArrowUp')}>
        <UpArrow />
      </Button>
      <Button buttonClass='snake-right' onClick={() => move('ArrowRight')}>
        <RightArrow />
      </Button>
    </div>
  );
}
