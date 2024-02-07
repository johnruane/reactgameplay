import SnakeGame from '../components/Games/Snake';

export default function Snake({ title }) {
  return (
    <>
      <h1 className='display-2 text-uppercase fw-bold mb-5'>{title}</h1>
      <div className='row mb-3'>
        <p className='lead'>
          Originating in the mid-1970s during the nascent stages of computer programming,
          Snake emerged as a simple yet captivating creation. Beginning as a mainframe
          game, it quickly transitioned into arcade cabinets, charming players with its
          straightforward gameplay.
        </p>
        <p className='lead'>
          The game's concept is elegantly simple – control a snake-like creature, consume
          objects, and grow longer. This timeless classic has adapted over the years,
          finding a place on early mobile phones and maintaining its allure across diverse
          gaming platforms. Snake's legacy is one of humble beginnings, innovation, and
          enduring appeal, leaving an indelible mark on the history of gaming. Join us as
          we explore the journey of the iconic Snake game through time.
        </p>
      </div>
      <SnakeGame />
    </>
  );
}
