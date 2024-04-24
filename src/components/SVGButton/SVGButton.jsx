import classNames from 'classnames';
import './SVGButton.scss';

const SVGButton = ({ className, content }) => {
  return <div className={classNames('svg-button-wrapper', className)}>{content}</div>;
};

export default SVGButton;
