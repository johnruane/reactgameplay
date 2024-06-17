import Button from '../../Components/Button';

import './controls.scss';

export default function Controls({ move }) {
  return (
    <div className='tetris-controls'>
      <div className='tetris-controls-wrapper'>
        <div className='direction-pad'>
          <Button className='tetris-left' onClick={() => move('ArrowLeft')} />
          <Button className='tetris-down' onClick={() => move('ArrowDown')} />
          <Button className='tetris-up' onClick={() => move('ArrowUp')} />
          <Button className='tetris-right' onClick={() => move('ArrowRight')} />

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
