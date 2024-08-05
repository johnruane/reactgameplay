import classNames from 'classnames';
import './button.scss';

export default function Button({ text, children, className, onClick, ariaLabel }) {
  return (
    <button
      className={classNames('game-button', className)}
      type='button'
      onClick={() => onClick()}
      aria-label={ariaLabel}
    >
      {text || children}
    </button>
  );
}
