import { ReactNode } from 'react';

import { LinkType } from './LinkComponent.types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './style.css';

const LinkComponent = ({
  to,
  label,
  type = LinkType.INTERNAL,
  key,
  children,
  additionalClasses,
}: {
  to: string;
  label: string;
  type?: string;
  key?: string;
  children?: ReactNode;
  additionalClasses?: string;
}) => {
  switch (type) {
    case 'EXTERNAL':
      return (
        <a
          className={classNames('lc-link', additionalClasses)}
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
          target="_self"
        >
          {label}
          {children}
        </Link>
      );
  }
};

export default LinkComponent;
