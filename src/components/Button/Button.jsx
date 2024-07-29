import classNames from 'classnames';
import RightArrow from '@icons/RightArrow';

import './Button.scss';

const Button = ({ text, onClickCallback, className }) => {
  return (
    <button className={classNames('button', className)} onClick={onClickCallback}>
      <span>{text}</span>
      <RightArrow />
    </button>
  );
};

export default Button;
