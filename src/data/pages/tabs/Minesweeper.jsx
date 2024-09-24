const tabs = [
  {
    id: 1,
    title: 'How to play',
    content: (
      <ol>
        <li>
          The object of the game is to clear the entire board without triggering
          any mines. It&apos;s like walking through a minefield, but way more
          fun!
        </li>
        <li>
          Click or tap a square reveal what&apos;s hidding underneath. Hold your
          breath and hope it&apos;s not a mine!
        </li>
        <li>
          Numbers are Clues: Each revealed number indicates how many mines are
          touching that square. Use these hints to deduce safe spots.
        </li>
        <li>
          If playing using a mouse then you can place a flag where you suspect a
          mine is lurking by using the <code>Right</code> mouse button. This
          helps keep track of potential dangers.
        </li>
        <li>Use logic to figure out where the mines are hiding.</li>
        <li>
          To help you find your way if you uncover a square with no adjacent
          mines then this area will open up revealing all non-mine spaces.
        </li>
        <li>
          If you hit a mine, don&apos;t sweat it! The more you play, the better
          you get. Each game is a fresh new challenge.
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
          Minesweeper scoring is all about speed! There's no point system — just
          a race against the clock. The faster you clear the board without
          hitting a mine, the better.
        </li>
      </ol>
    ),
  },
  {
    id: 3,
    title: 'Key concepts',
    content: (
      <ol>
        <li>
          The game makes use of <code>useState</code>, <code>useEffect</code> &{' '}
          <code>useRef</code> to store game states and react to state updates.
        </li>
        <li>
          <code>onClick</code> events register when a player has made a move,
          which triggers a number of utility functions to check what cell has
          been uncovered and what action to take.
        </li>
        <li>
          <code>Arrays</code> & loops make up most of the utility functions, as
          well as storing and accessing a matrix.
        </li>
        <li>
          <code>HTML</code> 'data' attributes are used to help display board
          states & store positions. I thought it was important that the code not
          give away the game by revealing the mine locations, so this has been
          obfuscated away.
        </li>
      </ol>
    ),
  },
  {
    id: 4,
    title: 'Coding challenges',
    content: (
      <ol>
        <li>
          The code is fairly simple and there are not many states that need to
          held. <code>useEffects</code> are mainly used just to break up
          functionality.
        </li>
        <li>
          If you don't want the mines to be discoverable within the HTML you'll
          have to use a number of 'data' attributes on each <code>cell</code> so
          that you can output a number of states.
        </li>
        <li>
          The biggest challenge is the 'flood-fill' feature. This is where
          adjacent empty cells are revealed in a single move. There are two ways
          to achieve this: Breadth-first search (BFS) or Depth-first search
          (DFS). This is a graph traversal algorithm, which is daunting at first
          but once you get familiar and look at some code examples you should be
          able to write a version of one of these searches so that it performs
          the 'flood-fill' like the real game.
        </li>
        <li>
          <code>Right-click</code> in the game set a flag. You will need to
          override the browser default of <code>right-click</code> opening up
          the browser context menu.
        </li>
      </ol>
    ),
  },
  {
    id: 5,
    title: 'How to build',
    content: (
      <>
        <p>The game is made up of the following major components:</p>
        <ul>
          <li>
            <code>displayBoard</code>
          </li>
          <li>
            <code>cluesBoard</code>
          </li>
          <li>
            <code>flagsMarked</code>
          </li>
        </ul>
        <p>
          There are a few extra states for <code>clock</code> and{' '}
          <code>gameOver</code> status.
        </p>
        <ol>
          <li>
            The <code>displayBoard</code> is represented by an{' '}
            <code>Array</code> of arrays - a matrix i.e{' '}
            <code>{'[[0, 0],[0, 0]]'}</code> would be a 2 x 2 board. This is
            stored and everytime this is updated the <code>displayBoard</code>{' '}
            is redrawn.
          </li>
          <li>
            The <code>cluesBoard</code> needs to be initialised with a set of
            numbers representing 'empty', 'mine' & a number count of how many
            mines a cell is touching.
          </li>
          <li>
            You can use <code>onClick</code> to trigger a function that obtains
            the <code>Cell</code> position and checks it against the{' '}
            <code>cluesBoard</code> and updates the <code>displayBoard</code>.
          </li>
          <li>
            To do the 'flood-fill' feature I choose Depth-first search. The
            basic premise of DFS search is it contains a 'stack'
            <code>Array</code>, a 'visited' <code>Set</code> & a 'result'
            <code>Array</code>. The 'stack' is all the positions the algorithm
            needs to visit using a <code>While</code> loop. Initialised to the
            current <code>Cell</code> position you then need to visit each
            adjacent <code>Cell</code> and add any empty <code>Cells</code> to
            the 'stack' for visiting later. The 'stack' will grow add shrink
            over its execution, visiting all empty cells in one direction before
            backtracking and searching all the way in another direction.
          </li>
          <li>
            The 'visited' <code>Set</code> is for tracking <code>Cells</code>
            you have already been to. It is a <code>Set</code> so that it does
            not contain duplicates. You will check this before visiting a
            <code>Cell</code>. Any empty <code>Cells</code> are stored in
            'result' for returning.
          </li>
          <li>
            You will need to expand the 'results' to include some numbered
            <code>Cells</code> adjacent to the empty ones found. This is how the
            real game works.
          </li>
        </ol>
        This is obviously a brief description of the game mechanics. Some of the
        other challenges of the game are:
        <ol>
          <li>
            The <code>useInterval</code> hook, see code comments for source.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 6,
    title: 'Credits',
    content: (
      <ol>
        <li>
          <code>useInterval</code> custom hook written by Dan Abramov
          https://overreacted.io/making-setinterval-declarative-with-react-hooks/
        </li>
      </ol>
    ),
  },
];

export default tabs;
