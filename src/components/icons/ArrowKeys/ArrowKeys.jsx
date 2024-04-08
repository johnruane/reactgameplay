import DownArrow from '../DownArrow';
import RightArrow from '../RightArrow';
import UpArrow from '../UpArrow';
import LeftArrow from '../LeftArrow';
import './ArrowKeys.scss';

const ArrowKeys = () => {
  return (
    <div className='ak-wrapper'>
      <UpArrow className='ak-up icon-shadow' />
      <LeftArrow className='ak-left icon-shadow' />
      <DownArrow className='ak-down icon-shadow' />
      <RightArrow className='ak-right icon-shadow' />
    </div>
  );
};

export default ArrowKeys;
