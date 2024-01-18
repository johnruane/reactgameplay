import TetrisGame from '../components/tetris';

export default function Tetris({ title }) {
  return (
    <>
      <h1 className='display-2 text-uppercase fw-bold pb-4'>{title}</h1>
      <TetrisGame />
    </>
  );
}
