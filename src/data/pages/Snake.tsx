import tabs from './tabs/Snake';
import { motion } from 'motion/react';

import SnakeGame from '@games/Snake/snake';

import SnakeHead from '@svg/games/snake-head.svg?react';

const MotionSnakeHead = motion.create(SnakeHead);

const gamePageData = {
  id: 'snake',
  niceName: 'Snake',
  title: <>Snake</>,
  link: 'https://github.com/johnruane/reactgames/tree/main/games/Snake',
  icon: MotionSnakeHead,
  year: '1998',
  complexity: 1,
  controls: (
    <ol>
      <li>
        Use the arrow keys <code>Left</code>, <code>Right</code>,{' '}
        <code>Up</code> & <code>Down</code> to move the snake.
      </li>
    </ol>
  ),
  concepts: (
    <ul>
      <li>Deque Data Structure Simulation,</li>
      <li>Collision Detection,</li>
      <li>Randomization,</li>
      <li>Interval Management,</li>
      <li>
        React hooks: <code>useEffect</code>, <code>useState</code>,{' '}
        <code>useCallback</code>.
      </li>
    </ul>
  ),
  intro: (
    <>
      <p>
        Snake is a classic video game that has delighted players with its
        straightforward yet engaging gameplay for decades. The game originated
        in the late 1970s and early 1980s, appearing on arcade machines and
        early home computers. One of the earliest versions was
        &quot;Blockade,&quot; developed by Gremlin in 1976. However, Snake
        became widely recognized when it was preloaded on Nokia mobile phones in
        the late 1990s, particularly with the release of the Nokia 6110 in 1997.
      </p>
      <p>
        The gameplay of Snake is simple yet addictive. Players control a snake
        that moves around a bordered plane, with the goal of consuming food
        items that appear randomly on the screen. Each time the snake eats a
        piece of food, it grows longer, making the game progressively more
        challenging as players must avoid colliding with the walls or the
        snake&apos;s own tail. The objective is to achieve the highest possible
        score by consuming as many food items as possible.
      </p>
      <p>
        Culturally, Snake has had a significant impact, particularly due to its
        association with Nokia mobile phones. It became one of the most-played
        mobile games globally, introducing countless people to mobile gaming and
        becoming a cultural icon of the late 1990s and early 2000s. Snake&apos;s
        simplicity and accessibility have led to numerous iterations and
        adaptations across various platforms, solidifying its place in gaming
        history. Its enduring popularity is a testament to its engaging gameplay
        and its role in the early days of mobile entertainment.
      </p>
    </>
  ),
  tabs: tabs,
  instructions: (
    <div className="game-instructions">
      <p className="panel-text panel-text-bold">Instructions</p>

      <ul className="panel-text game-list">
        <li>Press PLAY GAME to begin the game.</li>
        <li>Press RESTART to reset the game.</li>
        <li>Press QUIT to return to the gamepage.</li>
        <li className="hide-mobile">
          Use the ARROW keys to move Left, Right, Up or Down.
        </li>
        <li className="hide-desktop">
          Use the D-PAD to move Left, Right, Up or Down.
        </li>
      </ul>
    </div>
  ),
  game: (props) => <SnakeGame {...props} />,
};

export default gamePageData;
