import Button from '../Button';

import './controls.scss';

export default function Controls({ move, onStartClickHandler, onSelectClickHandler }) {
  return (
    <div className='game-controls'>
      <div className='game-controls-elements-wrapper'>
        <div className='game-controls-d-pad'>
          <Button className='pad-left' onClick={() => move('ArrowLeft')} />
          <Button className='pad-down' onClick={() => move('ArrowDown')} />
          <Button className='pad-up' onClick={() => move('ArrowUp')} />
          <Button className='pad-right' onClick={() => move('ArrowRight')} />

          <div className='game-controls-d-pad-spacer'></div>
        </div>
        <div className='game-function-buttons-wrapper'>
          <span className='game-controls-button-text-wrapper'>
            <p className='game-controls-button-text'>START</p>
            <Button
              className='game-controls-button'
              onClick={onStartClickHandler}
            ></Button>
          </span>
          <span className='game-controls-button-text-wrapper'>
            <p className='game-controls-button-text'>QUIT</p>
            <Button
              className='game-controls-button'
              onClick={onSelectClickHandler}
            ></Button>
          </span>
        </div>
        <div className='control-buttons'>
          <Button className='button-a' onClick={() => move('Space')} />
          <Button className='button-b' />
        </div>
      </div>
    </div>
  );
}
