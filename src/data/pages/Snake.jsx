import tabs from './tabs/Snake';
import SnakeGame from '@components/Games/snake';

const gamePageData = {
  id: 'snake',
  title: <>Snake</>,
  year: '1998',
  complexity: 'Level 1',
  controls: (
    <ol>
      <li>Use the Arrow Keys ⬅ ⬇ ➡ to move the snake.</li>
    </ol>
  ),
  intro: (
    <>
      <p>
        Originating in the mid-1970s during the nascent stages of computer programming,
        Snake emerged as a simple yet captivating creation. Beginning as a mainframe game,
        it quickly transitioned into arcade cabinets, charming players with its
        straightforward gameplay.
      </p>
      <p>
        The game&apos;s concept is elegantly simple U+2013 control a snake-like creature,
        consume objects, and grow longer. This timeless classic has adapted over the
        years, finding a place on early mobile phones and maintaining its allure across
        diverse gaming platforms.
      </p>
      <p>
        Snake&apos;s legacy is one of humble beginnings, innovation, and enduring appeal,
        leaving an indelible mark on the history of gaming. Join us as we explore the
        journey of the iconic Snake game through time.
      </p>
    </>
  ),
  tabs: tabs,
  game: <SnakeGame />,
};

export default gamePageData;
