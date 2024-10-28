import { LinkComponent } from '@components';

import ArrowUpRight from '@svg/global/arrow-up-right.svg?react';
import Potion from '@svg/home/potion.svg?react';

import './style.scss';

const LevelUp = () => {
  return (
    <>
      <div className="l-up-text-wrapper" data-stack="space-m-l">
        <div data-stack>
          <h2 className="l-up-heading">
            Ready to level up your coding skills while having a blast?
          </h2>
          <p className="l-up-sub-heading">
            Choose your game & explore the code. React Gameplay is your go-to
            destination for learning React through play.
          </p>
        </div>
        <LinkComponent
          label="To code repository"
          to="https://github.com/johnruane/reactgameplay"
          newWindow={true}
          additionalClasses="l-up-link"
        >
          <ArrowUpRight />
        </LinkComponent>
      </div>
      <Potion className="l-up-svg fluid-img" />
    </>
  );
};

export default LevelUp;
