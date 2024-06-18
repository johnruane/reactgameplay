import classNames from 'classnames';
import './button.scss';

export default function Button({ text, children, className, onClick }) {
  return (
    <button
      className={classNames('game-button', className)}
      type='button'
      onClick={() => onClick()}
    >
      {text || children}
    </button>
  );
}
