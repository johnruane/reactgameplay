import classNames from 'classnames';
import './ScrollBar.scss';

const ScrollBar = ({ text, additionalClasses }) => {
  return (
    <div
      className={classNames(`sb-scrollbar`, additionalClasses, {
        [`sb-${text}`]: text,
      })}
    />
  );
};

export default ScrollBar;
