import SVGButton from '@components/SVGButton';
import DownArrow from '@icons/DownArrow';
import RightArrow from '@icons/RightArrow';
import UpArrow from '@icons/UpArrow';
import LeftArrow from '@icons/LeftArrow';

import './ArrowKeys.scss';

const ArrowKeys = ({ className }) => {
  return (
    <div className='ak-wrapper'>
      <SVGButton content={<UpArrow />} className='ak-up' />
      <SVGButton content={<LeftArrow />} className='ak-left' />
      <SVGButton content={<DownArrow />} className='ak-down' />
      <SVGButton content={<RightArrow />} className='ak-right' />
    </div>
  );
};

export default ArrowKeys;
