import classNames from 'classnames';

import './divider.scss';

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
