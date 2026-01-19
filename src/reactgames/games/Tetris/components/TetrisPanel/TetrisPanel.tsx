import { ReactNode } from 'react';
import classNames from 'classnames';

import style from './style.module.css';

export default function TetrisPanel({
  heading,
  children,
}: {
  heading?: string;
  children?: ReactNode;
}) {
  return (
    <div className={style['panel-wrapper']}>
      <div className={style['panel']}>
        {heading && (
          <p className={classNames(style['text'], style['bold'])}>{heading}</p>
        )}
        {children as ReactNode}
      </div>
    </div>
  );
}
