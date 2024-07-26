import Potion from '@icons/Potion';
import './LevelUp.scss';

const LevelUp = () => {
  return (
    <div className='hm-levelup-wrapper'>
      <div className='hm-levelup-image-wrapper'>
        <Potion />
      </div>
      <div className='hm-levelup-text-wrapper' data-stack>
        <h2 className='hm-levelup-heading'>
          Ready to level up your coding skills while having a blast?
        </h2>
        <p className='hm-levelup-sub-heading'>
          Choose your game & explore the code. React Gameplay is your go-to destination
          for learning React through play.
        </p>
      </div>
    </div>
  );
};

export default LevelUp;
