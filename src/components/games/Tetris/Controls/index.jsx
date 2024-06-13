import Button from '../../Components/Button';
import LeftArrow from './Icons/LeftArrow';
import DownArrow from './Icons/DownArrow';
import UpArrow from './Icons/UpArrow';
import RightArrow from './Icons/RightArrow';

import './controls.scss';

export default function Controls({ move }) {
  return (
    // <div className='tetris-controls'>
    //   <Button className='tetris-left' onClick={() => move('ArrowLeft')}>
    //     <LeftArrow />
    //   </Button>
    //   <Button className='tetris-down' onClick={() => move('ArrowDown')}>
    //     <DownArrow />
    //   </Button>
    //   <Button className='tetris-rotate' onClick={() => move('Space')}>
    //     <RotateArrow />
    //   </Button>
    //   <Button className='tetris-right' onClick={() => move('ArrowRight')}>
    //     <RightArrow />
    //   </Button>
    // </div>
    <div className='tetris-controls'>
      <div className='tetris-controls-wrapper'>
        <div className='direction-pad'>
          <Button className='tetris-left' onClick={() => move('ArrowLeft')}>
            <LeftArrow />
          </Button>
          <Button className='tetris-down' onClick={() => move('ArrowDown')}>
            <DownArrow />
          </Button>
          <Button className='tetris-up' onClick={() => move('ArrowUp')}>
            <UpArrow />
          </Button>
          <Button className='tetris-right' onClick={() => move('ArrowRight')}>
            <RightArrow />
          </Button>
          <div className='tetris-pad-spacer'></div>
        </div>
        <div className='control-buttons'>
          <Button className='tetris-a' onClick={() => move('Space')}>
            A
          </Button>
          <Button className='tetris-b' onClick={() => move('ArrowRight')}>
            B
          </Button>
        </div>
      </div>
    </div>
  );
}
