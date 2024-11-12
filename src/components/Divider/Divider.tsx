import classNames from 'classnames';

import './style.scss';

const Divider = ({ color, background }) => {
  return (
    <div
      className={classNames(
        'divider',
        `divider-${color}`,
        `background-${background}`,
      )}
    ></div>
  );
};

export default Divider;