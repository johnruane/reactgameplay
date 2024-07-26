import classNames from 'classnames';

import HeadingIcon from '@icons/Heading';

import './Heading.scss';

const Heading = ({ title, className }) => {
  return (
    <h3 className={classNames('h-heading-wrapper', className)}>
      <HeadingIcon />
      <span className='h-heading'>{title}</span>
    </h3>
  );
};

export default Heading;
