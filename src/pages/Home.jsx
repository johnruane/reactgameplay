import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='container py-5'>
        <h1 className='mb-5'>
          <span className='display-1 fw-bold'>React</span>
          <span className='display-1 fst-italic'> gameplay</span>
        </h1>

        <div className='row'>
          <div className='col-lg-8'>
            <p className='font-serif lead mb-4 text-clamp'>
              Welcome to React Game Play – where the joy of coding meets the thrill of
              gaming! 🎮
            </p>
            <p className='font-serif lead my-0 text-clamp'>
              Dive into a world of whimsical wonders and playful pixels as we showcase a
              collection of React-powered games designed to tickle your coding fancy. Our
              goal is simple: to turn game development into an enjoyable, accessible
              playground for React enthusiasts and aspiring developers.
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row g-5'>
          <div className='col-md-4'>
            <Link to={'/tetris'} className='text-decoration-none'>
              <div className='card'>
                <img
                  src='https://placehold.co/280x200/1d1d1b/ffcb03?text=TETRIS'
                  className='card-img-top'
                  alt='...'
                />
              </div>
            </Link>
          </div>
          <div className='col-md-4'>
            <Link to={'/snake'} className='text-decoration-none'>
              <div className='card'>
                <img
                  src='https://placehold.co/280x200/1d1d1b/ffcb03?text=SNAKE'
                  className='card-img-top'
                  alt='...'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
