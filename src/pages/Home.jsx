import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='container py-5'>
        <div className='col-xxl-10'>
          <h1 className='display-1 text-uppercase fw-bold'>React Game Play</h1>
          <div className='border border-3 accent-color w-50 my-4'></div>
        </div>
        <div className='col-lg-10 col-xxl-8'>
          <p className='font-serif lead mb-4'>
            Welcome to React Game Play – where the joy of coding meets the thrill of
            gaming! 🎮
          </p>
          <p className='font-serif lead my-0'>
            Dive into a world of whimsical wonders and playful pixels as we showcase a
            collection of React-powered games designed to tickle your coding fancy. Our
            goal is simple: to turn game development into an enjoyable, accessible
            playground for React enthusiasts and aspiring developers.
          </p>
        </div>
      </div>
      <div className='container py-4 mt-1 mb-2 mt-sm-2 mb-sm-3 mt-md-3 mb-md-4 my-lg-4 my-xl-5'>
        <div className='row'>
          <div className='col'>
            <Link to={'/tetris'} className='text-decoration-none'>
              <div className='card'>
                <img
                  src='https://placehold.co/280x200?text=Tetris'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='col'>
            <Link to={'/snake'} className='text-decoration-none'>
              <div className='card'>
                <img
                  src='https://placehold.co/280x200?text=Snake'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
