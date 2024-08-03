import classNames from 'classnames';

import './ResponsiveSVG.scss';

const ResponsiveSVG = ({ children, maxWidth, additionalClasses }) => {
  return (
    <div
      className={classNames('r-svg-wrapper', additionalClasses)}
      style={{ maxWidth: `${maxWidth}rem` }}
    >
      {children}
    </div>
  );
};

export default ResponsiveSVG;
