import classNames from 'classnames';

import LineCircle from '@icons/LineCircle';

import './Heading.scss';

const Heading = ({ title, className }) => {
  return (
    <h3 className={classNames('h-heading-wrapper', className)}>
      <LineCircle />
      <span className='h-heading'>{title}</span>
    </h3>
  );
};

export default Heading;
