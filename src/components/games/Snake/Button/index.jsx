import classNames from 'classnames';
import style from './button.module.css';

export default function Button({ children, buttonClass, onClick }) {
  return (
    <button
      className={classNames(style.button, buttonClass)}
      type='button'
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
