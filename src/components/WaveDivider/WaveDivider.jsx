import classNames from 'classnames';
import './WaveDivider.scss';

const WaveDivider = ({ children, flip }) => {
  return <div className={classNames('wave-divider-wrapper', flip)}>{children}</div>;
};

export default WaveDivider;
