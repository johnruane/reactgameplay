import classNames from 'classnames';
import './WaveDivider.scss';

const WaveDivider = ({
  children,
  flipWaveX,
  flipWaveY,
  flipIconsX,
  flipIconsY,
  background,
  icons,
  flipOrder,
}) => {
  const WaveElement = () => {
    return <span className='wave-wrapper'></span>;
  };

  const IconsElement = () => {
    return <span className='icons-wrapper'></span>;
  };

  const elements = [<IconsElement key={2} />, <WaveElement key={1} />];
  return (
    <div
      className={classNames('wave-divider-wrapper', background, icons, {
        ['flipwave-x']: flipWaveX,
        ['flipwave-y']: flipWaveY,
        ['flipicons-x']: flipIconsX,
        ['flipicons-y']: flipIconsY,
        [`icons-${icons}`]: icons,
        ['flipOrder']: flipOrder,
      })}
    >
      {flipOrder ? elements.reverse() : elements}
      {children}
    </div>
  );
};

export default WaveDivider;
