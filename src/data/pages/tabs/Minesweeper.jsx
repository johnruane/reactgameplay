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
    title: 'Game logic',
    content: (
      <ol>
        <li>
          The game is initialised by creating a 2D board of a specified size
          containing grey squares.
        </li>
        <li>
          A certain number of mines are randomly placed on the grid. The number
          of mines depends on the difficulty level.
        </li>
        <li>
          Each cell can either contain a mine or be empty. The empty cells, when
          revealed, will display the number of mines in the surrounding cells.
          Neighboring cells are the eight cells surrounding any given cell
          (diagonally, vertically, and horizontally adjacent).
        </li>
        <li>
          The player interacts with the grid by selecting a cell. There are two
          main actions:
          <ul>
            <li>
              Left-click (Reveal): The player reveals the content of the cell.
            </li>
            <li>
              Right-click (Flag): The player marks the cell with a flag to
              indicate they believe a mine is there.
            </li>
          </ul>
        </li>
        <li>
          If the revealed cell contains a mine, the game is over, and all mines
          are revealed. If the revealed cell contains a number, indicating the
          number of mines in the surrounding cells, display that number. If the
          revealed cell is an empty cell (no surrounding mines), recursively
          reveal all neighboring empty cells and continue revealing cells until
          reaching cells with numbers. This prevents the player from revealing
          all cells one by one.
        </li>
        <li>
          When the player right-clicks a cell, it is marked with a flag to
          indicate a suspected mine. Flags are purely visual markers and do not
          affect the underlying game logic. The player can toggle between
          flagging and unflagging a cell by right-clicking again.
        </li>
        <li>
          The player wins the game when all cells that do not contain mines have
          been revealed. At this point, the game will display a victory message.
        </li>
        <li>
          The game ends if the player clicks on a mine, resulting in a loss. All
          remaining mines will be revealed, and the game will indicate the loss.
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
          The code is fairly simple and there are not many states that need to
          be held. <code>useEffects</code> are mainly used just to break up
          functionality.
        </li>
        <li>
          When randomly generating mines for the board you don't want it to
          choose a cell already marked for being a mine. Rather than randomly
          generating a position it is better to randomly choose a position from
          a list and remove positions previously chosen.
        </li>
        <li>
          You don't want to reveal the value of your cells within your HTML
          code. The board in HTML doesn't need to hold the value it will be when
          revealed. Use the board in <code>useState</code> as a value reference.
          The HTML board can just hold it's 'row' & 'column' position to help
          the reference.
        </li>
        <li>
          The biggest challenge is the 'flood-fill' feature. This is where
          adjacent empty cells are revealed in a single move. There are two ways
          to achieve this: Breadth-first search (BFS) or Depth-first search
          (DFS). These are graph traversal algorithms, which is daunting at
          first but once you get familiar and look at some code examples you
          should be able to write a version of one of these searches so that it
          performs the 'flood-fill' like the real game.
        </li>
        <li>
          <code>Right-click</code> in the game sets a flag. You will need to
          prevent the browser default context menu and perform your own task.
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
            To do the 'flood-fill' feature I choose depth-first search. The
            basic premise of DFS search is it contains:
            <ul>
              <li>
                Stack: The 'stack' is an <cdoe>Array</cdoe> of all the
                'row/column' combinations the algorithm needs to visit.
                Initialised to the current cell position you then start a
                <code>While</code> loop, visiting each cell adjacent to the
                current cell. Any adjacent cell that is empty has it's
                'row/column' position pushed to the 'stack' for visiting later.
                The 'stack' will grow add shrink as it traverses the board
                visiting all empty cells in a single direction before
                backtracking and searching all the way in another direction.
              </li>
              <li>
                Visited: The 'visited' <code>Set</code> is for tracking the
                cells you have already been to. It is a <code>Set</code> so that
                it does not contain duplicates. You will check this before
                visiting a cell so that you aren't visited cells you have
                already been to.
              </li>
              <li>
                Result: Any empty cells you find are pushed in a 'result'
                <code>Array</code>. When the search is finished you will return
                this to the program for revealing.
              </li>
              <li>
                As well as empty cells you also want to reveal the first layer
                of numbered cells in order to give clues to the player.
              </li>
            </ul>
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
    title: 'Useful links',
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
