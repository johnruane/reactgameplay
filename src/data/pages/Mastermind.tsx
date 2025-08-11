import tabs from './tabs/Mastermind';
import MastermindGame from 'src/reactgames/games/Mastermind/mastermind';

import MastermindHead from '@svg/games/mastermind-head.svg?react';

const gamePageData = {
  id: 'mastermind',
  title: (
    <>
      <span>Master</span>
      <br />
      <span>mind</span>
    </>
  ),
  link: 'https://github.com/johnruane/reactgames/tree/main/games/Mastermind',
  icon: <MastermindHead className="gsap-bouncing fluid-img" />,
  year: '1970',
  complexity: 3,
  controls: (
    <ol>
      <li>
        Use the arrow keys <code>Left</code>, <code>Down</code> &{' '}
        <code>Right</code> to move the falling piece.
      </li>
      <li>
        Press the <code>Spacebar</code> to rotate.
      </li>
    </ol>
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
        player (the codemaker) sets a hidden code using colored pegs, and the
        other player (the codebreaker) attempts to guess the correct color and
        position of the pegs within a limited number of turns. After each guess,
        the codemaker provides feedback using smaller pegs to indicate correct
        positions (black pegs) and correct colors in incorrect positions (white
        pegs), without revealing which is which. This loop of deduction,
        feedback, and refinement continues until the code is broken or the
        guesses run out.
      </p>
      <p>
        Over the years, the game has been adapted for different age groups, and
        various versions have introduced larger boards, more colors, or even
        electronic variants. In the digital age, Mastermind has found new life
        in mobile apps, online multiplayer versions, and even educational
        settings where it&apos; used to teach logic and algorithmic thinking.
        Its rules have inspired computer scientists and AI researchers, with
        algorithms developed specifically to solve the game efficiently. The
        core concept of iterative deduction remains relevant and compelling,
        making Mastermind a timeless game that bridges generations and
        technologies while continuing to challenge players&apos; reasoning
        skills.
      </p>
    </>
  ),
  tabs: tabs,
  game: (props) => <MastermindGame {...props} />,
};

export default gamePageData;
