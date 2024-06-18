import Button from '../Button';

import './controls.scss';

export default function Controls({ move, onStartClickHandler, onSelectClickHandler }) {
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
        <div className='game-controls-wrapper'>
          <span>          
            <p className='game-controls-button-text'>START</p>
            <Button className='game-controls-button' onClick={onStartClickHandler}></Button>
          </span>
          <span>
            <p className='game-controls-button-text'>SELECT</p>
            <Button className='game-controls-button' onClick={onSelectClickHandler}></Button>
          </span>
        </div>
        <div className='control-buttons'>
          <Button className='tetris-a' text='A' onClick={() => move('Space')} />
          <Button className='tetris-b' text='B' />
        </div>
      </div>
    </div>
  );
}
