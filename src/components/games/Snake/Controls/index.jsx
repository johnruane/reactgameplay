import Button from '../../Components/Button';

import LeftArrow from './Icons/LeftArrow';
import DownArrow from './Icons/DownArrow';
import UpArrow from './Icons/UpArrow';
import RightArrow from './Icons/RightArrow';

import './controls.scss';

export default function Controls({ move }) {
  return (
    <div className='snake-controls'>
      <Button className='snake-left' onClick={() => move('ArrowLeft')}>
        <LeftArrow />
      </Button>
      <Button className='snake-down' onClick={() => move('ArrowDown')}>
        <DownArrow />
      </Button>
      <Button className='snake-up' onClick={() => move('ArrowUp')}>
        <UpArrow />
      </Button>
      <Button className='snake-right' onClick={() => move('ArrowRight')}>
        <RightArrow />
      </Button>
    </div>
  );
}
