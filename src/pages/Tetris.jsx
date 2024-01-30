import TetrisGame from '../components/games/tetris';

export default function Tetris({ title }) {
  return (
    <>
      <h1 className='display-2 text-uppercase fw-bold mb-5'>{title}</h1>
      <TetrisGame />
    </>
  );
}
