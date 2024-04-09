import DownArrow from '../DownArrow';
import RightArrow from '../RightArrow';
import UpArrow from '../UpArrow';
import LeftArrow from '../LeftArrow';
import './ArrowKeys.scss';

const ArrowKeys = ({ className }) => {
  return (
    <div className='ak-wrapper'>
      <UpArrow className={`${className} ak-up icon-shadow`} />
      <LeftArrow className={`${className} ak-left icon-shadow`} />
      <DownArrow className={`${className} ak-down icon-shadow`} />
      <RightArrow className={`${className} ak-right icon-shadow`} />
    </div>
  );
};

export default ArrowKeys;
