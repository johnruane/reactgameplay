import './Gameover.scss';

const Gameover = () => {
  return (
    <div className='container background-black'>
      <div className='grid go-text-wrapper'>
        <p className='go-text'>
          <span>GAME</span>&nbsp;<span className='go-text-thin'>OVER</span>
        </p>
      </div>
    </div>
  );
};

export default Gameover;
