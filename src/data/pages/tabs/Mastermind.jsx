const tabs = [
  {
    id: 1,
    title: 'How to play',
    content: (
      <ol>
        <li>
          The goal of Mastermind is to guess the secret code, a sequence of 4
          colored pegs, before you run out of turns.
        </li>
        <li>
          Each turn, place your guess by choosing a color for each peg in the
          row. You can repeat colors.
        </li>
        <li>
          After submitting your guess look out for clue pegs:{' '}
          <strong>White</strong> means a correct color in the correct position,
          and <strong>Black</strong> means a correct color in the wrong
          position.
        </li>
        <li>
          The clues don&apos;t tell you which pegs they refer to so you&apos;ll
          need to use logic and deduction to narrow things down.
        </li>
        <li>
          Keep adjusting your guesses based on the feedback until you crack the
          code or run out of tries!
        </li>
        <li>
          You&apos;ve got a limited number of turns so make each guess count.
        </li>
        <li>
          Once the code is cracked or turns run out the hidden code will be
          revealed!
        </li>
      </ol>
    ),
  },
  {
    id: 2,
    title: 'Scoring',
    content: (
      <ol>
        <li>
          Mastermind scoring is all about speed! There's no point system — just
          a race against the clock. The faster you guess the code, the better.
        </li>
      </ol>
    ),
  },
  {
    id: 3,
    title: 'Game logic',
    content: <ol></ol>,
  },
  {
    id: 4,
    title: 'Tips',
    content: <ol></ol>,
  },
  {
    id: 5,
    title: 'Deep dive',
    content: (
      <>
        <p>The game is made up of the following major components:</p>
      </>
    ),
  },
  // {
  //   id: 6,
  //   title: 'Useful links',
  //   content: (
  //     <ol>
  //       <li>
  //         <code>useInterval</code> custom hook written by Dan Abramov
  //         https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  //       </li>
  //     </ol>
  //   ),
  // },
];

export default tabs;
