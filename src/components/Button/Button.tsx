import classNames from 'classnames';

import styles from './style.module.css';

const Button = ({
  text,
  children,
  onClick,
  className,
  ariaLabel = '',
}: {
  text?: string;
  children?: JSX.Element;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}) => {
  return (
    <button
      className={classNames(styles['button'], className)}
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
