import tabs from './tabs/Mastermind';
import { motion } from 'motion/react';

import MastermindGame from '@games/Mastermind/mastermind';

import MastermindHead from '@svg/games/mastermind-head.svg?react';

const MotionMastermindHead = motion.create(MastermindHead);

const gamePageData = {
  id: 'mastermind',
  niceName: 'Mastermind',
  title: (
    <>
      <span>Master</span>
      <br />
      <span>mind</span>
    </>
  ),
  link: 'https://github.com/johnruane/reactgames/tree/main/games/Mastermind',
  icon: MotionMastermindHead,
  year: '1970',
  complexity: 1,
  controls: (
    <ol>
      <li>Tap a coloured pin to open the palette and choose a new colour.</li>
      <li>Press 'Go!' to submit your guess.</li>
    </ol>
  ),
  concepts: (
    <ul>
      <li>Algorithm Design,</li>
      <li>Iterative Deduction,</li>
      <li>Context API,</li>
      <li>Data Attributes,</li>
      <li>
        React hooks: <code>useEffect</code>, <code>useState</code>,{' '}
        <code>useContext</code>.
      </li>
    </ul>
  ),
  intro: (
    <>
      <p>
        Mastermind is a code-breaking game that originated in the early 1970s
        and has since become a classic in strategy and logic gaming. Released in
        1971, Mastermind quickly gained popularity due to its simple yet
        intellectually engaging mechanics. It won numerous awards and became a
        best-seller internationally, with its distinctive packaging featuring a
        sharply dressed man and a mysterious woman becoming iconic.
      </p>
      <p>
        The core gameplay of Mastermind is deceptively straightforward: one
        player sets a hidden code using colored pegs and the other player tries
        to guess the correct color and position of the pegs within a limited
        number of turns. After each guess the codemaker provides feedback using
        smaller pegs to show correct positions (black pegs) and correct colors
        in the wrong positions (white pegs) without revealing which is which.
        This cycle of deduction and feedback continues until the code is broken
        or the guesses run out.
      </p>
      <p>
        Over the years the game has been adapted for different age groups and
        many versions have introduced larger boards, more colors or even
        electronic variants. In the digital age Mastermind has found new life in
        mobile apps, online multiplayer versions and educational settings where
        it is used to teach logic and algorithmic thinking. Its rules have
        inspired computer scientists and AI researchers with algorithms
        developed specifically to solve the game efficiently. The concept of
        iterative deduction remains relevant and compelling, making Mastermind a
        timeless game that bridges generations and technologies while continuing
        to challenge reasoning skills.
      </p>
    </>
  ),
  tabs: tabs,
  instructions: (
    <div className="game-instructions">
      <p className="panel-text panel-text-bold">Instructions</p>

      <ul className="panel-text game-list">
        <li>Press RESTART to reset the game.</li>
        <li>Press QUIT to return to the gamepage.</li>
      </ul>
    </div>
  ),
  game: (props) => <MastermindGame {...props} />,
};

export default gamePageData;
