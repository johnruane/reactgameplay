import SVGButton from '@components/SVGButton';
import DownArrow from '@icons/DownArrow';
import DownRightArrow from '@icons/DownRightArrow';
import RightArrow from '@icons/RightArrow';
import Plus from '@icons/Plus';
import Punch from '@icons/Punch';

const StreetFighter = () => {
  return (
    <>
      <SVGButton content={<DownArrow />} />
      <SVGButton content={<DownRightArrow />} />
      <SVGButton content={<RightArrow />} />
      <Plus />
      <SVGButton content={<Punch />} />
    </>
  );
};

export default StreetFighter;
