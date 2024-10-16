import { Button } from '@components';

import useMediaQuery from '@hooks/useMatchMedia';

import './controls.scss';

export default function Controls({
  move,
  onStartClickHandler,
  onQuitClickHandler,
}: {
  move: (unknown: string) => void;
  onStartClickHandler: () => void;
  onQuitClickHandler: () => void;
}) {
  const isDesktop = useMediaQuery('DESKTOP');

  return (
    <div className="game-controls">
      {isDesktop ? (
        <div className="game-controls-elements-wrapper-desktop">
          <Button
            className="button button-full-width"
            text="Start"
            onClick={onStartClickHandler}
            ariaLabel="Start game"
          />
          <button
            id="quit-game"
            className="button unset"
            onClick={onQuitClickHandler}
            aria-label="Quit game"
          />
        </div>
      ) : (
        <div className="game-controls-elements-wrapper">
          <div className="game-controls-d-pad">
            <Button
              className="button-reset pad-left"
              onClick={() => move('ArrowLeft')}
              ariaLabel="Move left"
              showIcon={false}
            />
            <Button
              className="button-reset pad-down"
              onClick={() => move('ArrowDown')}
              ariaLabel="Move down"
              showIcon={false}
            />
            <Button
              className="button-reset pad-up"
              onClick={() => move('ArrowUp')}
              ariaLabel="Move up"
              showIcon={false}
            />
            <Button
              className="button-reset pad-right"
              onClick={() => move('ArrowRight')}
              ariaLabel="Move right"
              showIcon={false}
            />

            <div className="game-controls-d-pad-spacer"></div>
          </div>
          <div className="game-function-buttons-wrapper">
            <span className="game-controls-button-text-wrapper">
              <p className="game-controls-button-text">START</p>
              <Button
                className="button-reset game-controls-button"
                onClick={onStartClickHandler}
                ariaLabel="Start game"
                showIcon={false}
              />
            </span>
            <span className="game-controls-button-text-wrapper">
              <p className="game-controls-button-text">QUIT</p>
              <Button
                className="button-reset game-controls-button"
                onClick={onQuitClickHandler}
                ariaLabel="Quit game"
                showIcon={false}
              />
            </span>
          </div>
          <div className="control-buttons">
            <Button
              className="button-reset button-a"
              onClick={() => move('Space')}
              ariaLabel="A button"
              showIcon={false}
            />
            <Button
              className="button-reset button-b"
              ariaLabel="B button"
              showIcon={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
