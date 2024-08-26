import classNames from 'classnames';
import './button.scss';

export default function Button({
  text,
  children,
  className,
  onClick,
  ariaLabel,
}: {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  return (
    <button
      className={classNames('game-button', className)}
      type='button'
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {text || children}
    </button>
  );
}
