import classNames from 'classnames';
import './WaveDivider.scss';

const WaveDivider = ({ children, flipX, flipY, background, icons, clean, top }) => {
  return (
    <div
      className={classNames('wave-divider-wrapper', background, icons, {
        ['clean']: clean,
        ['vertical']: flipX,
        ['horizontal']: flipY,
        [`icons-${icons}`]: icons,
        ['top']: top,
      })}
    >
      <span className='wave-wrapper'></span>
      {children}
    </div>
  );
};

export default WaveDivider;
