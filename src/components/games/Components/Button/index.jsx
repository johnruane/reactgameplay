import classNames from 'classnames';
import './button.scss';

export default function Button({ children, buttonClass, onClick }) {
  return (
    <button
      className={classNames('game-button', buttonClass)}
      type='button'
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
