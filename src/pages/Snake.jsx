import SnakeGame from '../components/games/Snake';

export default function Snake({ title }) {
  return (
    <>
      <h1 className='display-2 text-uppercase fw-bold mb-5'>{title}</h1>
      <SnakeGame />
    </>
  );
}
