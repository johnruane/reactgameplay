import classNames from 'classnames';
import HeadingsIcon from '@svg/global/headings-icon.svg?react';

import './Heading.scss';

const Heading = ({ title, className }) => {
  return (
    <h3 className={classNames('h-heading-wrapper', className)}>
      <HeadingsIcon className='test2' />
      <span className='h-heading'>{title}</span>
    </h3>
  );
};

export default Heading;
