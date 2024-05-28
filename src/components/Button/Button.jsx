import classNames from 'classnames';
import './Button.scss';

const Button = ({ text, onClickCallback, className }) => {
  return (
    <button className={classNames('button', className)} onClick={onClickCallback}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
