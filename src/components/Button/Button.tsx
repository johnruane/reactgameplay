import classNames from 'classnames';
import ArrowRight from '@svg/global/arrow-right.svg?react';

import './Button.scss';

const Button = ({ text, onClickCallback, className }) => {
  return (
    <button className={classNames('button', className)} onClick={onClickCallback}>
      <span>{text}</span>
      <ArrowRight />
    </button>
  );
};

export default Button;
