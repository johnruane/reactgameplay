import classNames from 'classnames';

import HeadingsIcon from '@svg/global/heading-icon.svg?react';

import './style.css';

const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2 className={classNames('h-heading-wrapper', className)}>
      <HeadingsIcon />
      <span className="h-heading">{title}</span>
    </h2>
  );
};

export default Heading;
