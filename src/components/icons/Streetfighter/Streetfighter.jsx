import DownArrow from '../../../assets/down-arrow';
import DownRightArrow from '../../../assets/down-right-arrow';
import RightArrow from '../../../assets/right-arrow';
import Plus from '../../../assets/plus';
import Punch from '../../../assets/punch';

import './Streetfighter.scss';

const Streetfighter = () => {
  return (
    <>
      <DownArrow className='sf-shawdow-icon' />
      <DownRightArrow className='sf-shawdow-icon' />
      <RightArrow className='sf-shawdow-icon' />
      <Plus />
      <Punch className='sf-shawdow-icon' />
    </>
  );
};

export default Streetfighter;
