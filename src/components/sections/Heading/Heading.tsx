import classNames from 'classnames';

import HeadingsIcon from '@svg/global/headings-icon.svg?react';

import './style.scss';

const Heading = ({ title, className }) => {
  return (
    <h2 className={classNames('h-heading-wrapper', className)}>
      <HeadingsIcon className="test2" />
      <span className="h-heading">{title}</span>
    </h2>
  );
};

export default Heading;
