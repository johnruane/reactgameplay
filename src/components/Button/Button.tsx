import classNames from 'classnames';

import './Button.scss';

const Button = ({ text, children, onClick, className, ariaLabel = '' }) => {
  return (
    <button
      className={classNames('button', className)}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};

export default Button;
