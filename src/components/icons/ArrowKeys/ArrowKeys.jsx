import DownArrow from '../DownArrow';
import RightArrow from '../RightArrow';
import UpArrow from '../UpArrow';
import LeftArrow from '../LeftArrow';
import './ArrowKeys.scss';

const ArrowKeys = () => {
  return (
    <div className='ak-wrapper'>
      <UpArrow className='ak-up' />
      <LeftArrow className='ak-left' />
      <DownArrow className='ak-down' />
      <RightArrow className='ak-right' />
    </div>
  );
};

export default ArrowKeys;
