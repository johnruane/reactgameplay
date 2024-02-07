import TetrisGame from '../components/Games/tetris';

export default function Tetris({ title }) {
  return (
    <>
      <h1 className='display-2 text-uppercase fw-bold mb-5'>{title}</h1>
      <div className='row mb-3'>
        <p className='lead'>
          In the 1980s, amid the realm of Soviet computer programming, "Tetris" emerged as
          a masterpiece crafted by Alexey Pajitnov. With its iconic falling tetrominoes
          and the objective of forming solid lines, the game rapidly captivated a global
          audience, transcending platforms from early computers to Nintendo's Game Boy.
          Tetris not only defined the puzzle genre but also etched its enduring legacy in
          gaming history, showcasing simplicity, ingenuity, and universal appeal.
        </p>
        <p className='lead'>
          As falling blocks became synonymous with gaming, Tetris solidified its status as
          a timeless classic. Its journey from early computers to widespread platforms
          underscores its remarkable adaptability, making it a symbol not only of a bygone
          era but also of the perennial allure of immersive and engaging gameplay.
        </p>
      </div>
      <TetrisGame />
    </>
  );
}
