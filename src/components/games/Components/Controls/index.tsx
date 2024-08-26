import Button from '../Button';

import './controls.scss';

export default function Controls({
  move,
  onStartClickHandler,
  onSelectClickHandler,
}: {
  move: (unknown: string) => void;
  onStartClickHandler: () => void;
  onSelectClickHandler: () => void;
}) {
  return (
    <div className='game-controls'>
      <div className='game-controls-elements-wrapper'>
        <div className='game-controls-d-pad'>
          <Button
            className='pad-left'
            onClick={() => move('ArrowLeft')}
            ariaLabel='Move left'
          />
          <Button
            className='pad-down'
            onClick={() => move('ArrowDown')}
            ariaLabel='Move down'
          />
          <Button
            className='pad-up'
            onClick={() => move('ArrowUp')}
            ariaLabel='Move up'
          />
          <Button
            className='pad-right'
            onClick={() => move('ArrowRight')}
            ariaLabel='Move right'
          />

          <div className='game-controls-d-pad-spacer'></div>
        </div>
        <div className='game-function-buttons-wrapper'>
          <span className='game-controls-button-text-wrapper'>
            <p className='game-controls-button-text'>START</p>
            <Button
              className='game-controls-button'
              onClick={onStartClickHandler}
              ariaLabel='Start game'
            ></Button>
          </span>
          <span className='game-controls-button-text-wrapper'>
            <p className='game-controls-button-text'>QUIT</p>
            <Button
              className='game-controls-button'
              onClick={onSelectClickHandler}
              ariaLabel='Quit game'
            ></Button>
          </span>
        </div>
        <div className='control-buttons'>
          <Button
            className='button-a'
            onClick={() => move('Space')}
            ariaLabel='A button'
          />
          <Button className='button-b' ariaLabel='B button' />
        </div>
      </div>
    </div>
  );
}
