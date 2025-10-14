import classNames from 'classnames';

import styles from './style.module.css';

const Divider = ({ color, background }) => {
  return (
    <div
      className={classNames(
        styles['divider'],
        styles[`divider-${color}`],
        `background-${background}`,
      )}
    ></div>
  );
};

export default Divider;
