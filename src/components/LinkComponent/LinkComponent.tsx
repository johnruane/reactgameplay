import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import './LinkComponent.scss';

const LinkComponent = ({
  to,
  label,
  type = 'INTERNAL',
  newWindow = false,
  key,
  children,
  additionalClasses,
}: {
  to: string;
  label: string;
  type?: string;
  newWindow: boolean;
  key?: string;
  children?: ReactNode;
  additionalClasses?: string;
}) => {
  switch (type) {
    case 'EXTERNAL':
      return (
        <a
          className={additionalClasses}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
          {children}
        </a>
      );
    case 'INTERNAL':
    default:
      return (
        <Link
          to={to}
          className={classNames('lc-link', additionalClasses)}
          key={key}
          target={newWindow ? '_blank' : '_self'}
          rel={newWindow ? 'noopener noreferrer' : ''}
        >
          {label}
          {children}
        </Link>
      );
  }
};

export default LinkComponent;
