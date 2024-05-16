import Button from '../Button';
import LeftArrow from './Icons/LeftArrow';
import DownArrow from './Icons/DownArrow';
import UpArrow from './Icons/UpArrow';
import RightArrow from './Icons/RightArrow';
import './controls.scss';

export default function Controls({ move }) {
  return (
    <div className='snake-controls'>
      <Button buttonClass='snake-controls-left' onClick={() => move('ArrowLeft')}>
        <LeftArrow />
      </Button>
      <Button buttonClass='snake-controls-down' onClick={() => move('ArrowDown')}>
        <DownArrow />
      </Button>
      <Button buttonClass='snake-controls-up' onClick={() => move('ArrowUp')}>
        <UpArrow />
      </Button>
      <Button buttonClass='snake-controls-right' onClick={() => move('ArrowRight')}>
        <RightArrow />
      </Button>
    </div>
  );
}
