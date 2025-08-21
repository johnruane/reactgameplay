import tabs from './tabs/Minesweeper';

import MinesweeperGame from '@games/Minesweeper/minesweeper';

import MineSweeperHead from '@svg/games/minesweeper-head.svg?react';

const gamePageData = {
  id: 'minesweeper',
  title: (
    <>
      <span>Mine</span>
      <br />
      <span>sweeper</span>
    </>
  ),
  link: 'https://github.com/johnruane/reactgames/tree/main/games/Minesweeper',
  icon: <MineSweeperHead className="gsap-bouncing fluid-img" />,
  year: '1989',
  complexity: 2,
  controls: (
    <ol>
      <li>
        On a touch device you can either tap the square you wish to reveal, or
        use the d-pad to move the selection pointer <code>Left</code>,{' '}
        <code>Right</code>, <code>Up</code> & <code>Down</code>. You can select
        a square to reveal by pressing the <code>A</code> key.
      </li>
      <li>
        If viewing on a desktop use the Mouse and click a square to reveal it.
      </li>
    </ol>
  ),
  intro: (
    <>
      <p>
        Minesweeper is a classic puzzle video game that has entertained and
        challenged players since its introduction. The game first appeared as
        part of the Microsoft Entertainment Pack in 1990 and was later included
        with Windows 3.1, making it widely accessible and a staple on millions
        of computers worldwide. However, its origins can be traced back to
        earlier mainframe games like &quot;Cube&quot; and &quot;Relentless
        Logic&quot; in the 1960s and 70s.
      </p>
      <p>
        The gameplay of Minesweeper is deceptively simple yet deeply strategic.
        Players are presented with a grid of hidden cells, some of which contain
        mines. The objective is to clear all the non-mine cells without
        detonating any mines. Players click on cells to reveal either a number,
        indicating how many adjacent cells contain mines, or a blank space,
        which may clear multiple cells. This numerical information is crucial
        for logically deducing the locations of the hidden mines, making each
        move a careful balance of strategy and risk.
      </p>
      <p>
        Culturally, Minesweeper has had a significant impact as one of the
        earliest games to come pre-installed on personal computers. It
        introduced many users to the concept of digital gaming and basic logical
        reasoning skills. Its presence on almost every Windows operating system
        until Windows 8 ensured its place in gaming history. Minesweeper has
        since become a beloved classic, spawning numerous clones and variations
        across different platforms, and remains a nostalgic favorite for many
        gamers around the world.
      </p>
    </>
  ),
  tabs: tabs,
  instructions: (
    <div className="game-instructions">
      <p className="panel-text panel-text-bold">Instructions</p>

      <ul className="panel-text game-list">
        <li>Press PLAY GAME to begin the game.</li>
        <li>Press START to reset the game.</li>
        <li>Press SELECT to open the games menu.</li>
        <li className="hide-mobile">Use the MOUSE to select a cell.</li>
        <li className="hide-mobile">LEFT-CLICK to reveal a cell.</li>
        <li className="hide-mobile">RIGHT-CLICK to mark a cell with a flag.</li>
        <li className="hide-desktop">
          Use the d-pad to move Left, Right, Up or Down.
        </li>
        <li className="hide-desktop">Press A to reveal a cell.</li>
        <li className="hide-desktop">Press B to mark a cell with a flag.</li>
      </ul>
    </div>
  ),
  game: (props) => <MinesweeperGame {...props} />,
};

export default gamePageData;
