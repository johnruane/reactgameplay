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
          After submitting your guess look out for clue pegs: <code>White</code>{' '}
          means a correct color in the correct position, and <code>Black</code>{' '}
          means a correct color in the wrong position.
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
    content: (
      <ol>
        <li>
          The game is initialised by generating a secret 4 digit code using the
          numbers 1-9.
        </li>
        <li>
          The numbers represent the 9 coloured peg options the player can choose
          when making a guess.
        </li>
        <li>
          I have choosen to contain the majority of the logic for each guess
          within each row. Each row contains a state for storing the players
          guess. On submitting a guess there is a comparison between the players
          guess with the secret code and an array is returned containing a{' '}
          <code>10</code> if there was a included match and an <code>11</code>{' '}
          if there was an exact match.
        </li>
      </ol>
    ),
  },
  {
    id: 4,
    title: 'Tips',
    content: (
      <ol>
        <li>
          Use <code>React.Context</code> in order to minimise props being passed
          down the component tree.
        </li>
        <li>
          When calculating the results of a guess you need to make sure to check
          for duplicates and not double count the same value.
        </li>
      </ol>
    ),
  },
  {
    id: 5,
    title: 'Deep dive',
    content: (
      <>
        <p>The game is made up of the following major components:</p>
        <ul>
          <li>
            <code>secretCode</code>
          </li>
          <li>
            <code>activeRow</code>
          </li>
        </ul>
        <p>
          There are a few extra states for <code>clock</code> and{' '}
          <code>gameOver</code> status.
        </p>
        <ol>
          <li>
            The <code>secretCode</code> is an array of {'[0, 0, 0, 0]'} numbers
            1-9 representing the secret code.
          </li>
          <li>
            The <code>activeRow</code> is the current row that the player is on
            and is used to control the visibility and playability of the rows.
          </li>
          <li>
            <code>React.Context</code> is used to pass the{' '}
            <code>secretCode</code> to each row and each row contains its own
            copy of state and logic for the guess.
          </li>
          <li>
            To calculate the results of a guess you just need to compare the
            guess with the secret code, making sure to check for duplicates and
            not double count the same value.
          </li>
          <li>
            The use of HTML data attributes is used to pass the data to the
            cells and rows, and also attach a pin palette to each cell when a
            row is active.
          </li>
        </ol>
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
