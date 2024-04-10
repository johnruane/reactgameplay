import StreetFighter from '@icons/StreetFighter';
import './LevelUp.scss';

const LevelUp = () => {
  return (
    <>
      <div className='hm-levelup-image-wrapper'>
        <StreetFighter />
      </div>
      <div className='hm-levelup-text-wrapper'>
        <p className='hm-levelup-heading'>
          Ready to level up your coding skills while having a blast?
        </p>
        <p className='hm-levelup-sub-heading'>
          Choose your game & explore the code. React Gameplay is your go-to destination
          for learning React through play.
        </p>
      </div>
    </>
  );
};

export default LevelUp;
