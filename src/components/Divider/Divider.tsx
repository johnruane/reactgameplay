import classNames from 'classnames';

import './style.css';

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
