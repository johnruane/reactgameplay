/* eslint-disable react/prop-types */
import TetrisGame from '@components/Games/tetris';
import GameTemplate from '@templates/game/GameTemplate';
import Tabs from '@components/Tabs';
import tabData from '../../data/tabs/index';

export default function Tetris({ title }) {
  return (
    <GameTemplate>
      <div className='container background-black'>
        <div className='grid'>
          <div className='t-intro-wrapper'>
            <h1>
              {title}
              <span>1994</span>
            </h1>
            <div>
              <p>Complexity</p>
              <p>Level 3</p>
            </div>

            <div>
              <p>Controls</p>
              <ol>
                <li>Use the Arrow Keys ⬅ ⬇ ➡ to move the falling piece.</li>
                <li>Press the Spacebar to rotate.</li>
              </ol>
            </div>

            <div>
              <p>
                In the 1980s, amid the realm of Soviet computer programming,
                &ldquo;Tetris&ldquo; emerged as a masterpiece crafted by Alexey Pajitnov.
                With its iconic falling tetrominoes and the objective of forming solid
                lines, the game rapidly captivated a global audience, transcending
                platforms from early computers to Nintendo&apos;s Game Boy. Tetris not
                only defined the puzzle genre but also etched its enduring legacy in
                gaming history, showcasing simplicity, ingenuity, and universal appeal.
              </p>
              <p className='lead'>
                As falling blocks became synonymous with gaming, Tetris solidified its
                status as a timeless classic. Its journey from early computers to
                widespread platforms underscores its remarkable adaptability, making it a
                symbol not only of a bygone era but also of the perennial allure of
                immersive and engaging gameplay.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='hm-wavy-wrapper flip-vertical'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      <div className='container background-yellow'>
        <div className='grid'>
          <div className='t-tabs-wrapper'>
            <Tabs data={tabData.Tetris} />
          </div>
        </div>
      </div>

      <div className='hm-wavy-wrapper'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      <TetrisGame />
    </GameTemplate>
  );
}
