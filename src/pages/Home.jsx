export default function Home() {
  return (
    <div className='container py-4'>
      <div className='p-5 mb-4 bg-body-tertiary rounded-3'>
        <div className='container-fluid py-5'>
          <h1 className='display-5 fw-bold'>React Gameplay</h1>
          <p className='col-md-8 fs-4'>
            Embark on a coding adventure with React Gameplay, a personal project dedicated
            to crafting engaging and straightforward games using the formidable React
            framework. Our mission is to not only deepen our understanding of React's
            intricacies but also to share the journey, code, and insights with the vibrant
            community of developers.
          </p>
          <button
            className='d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill'
            type='button'
          >
            Call to action
            <svg className='bi ms-2' width='24' height='24'>
              <use xlinkHref='#arrow-right-short'></use>
            </svg>
          </button>
        </div>
      </div>

      <div className='container px-4 py-5' id='featured-3'>
        <h2 className='pb-2 border-bottom'>Columns with icons</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-2'>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
              <svg className='bi' width='1em' height='1em'>
                <use xlinkHref='#collection'></use>
              </svg>
            </div>
            <h3 className='fs-2 text-body-emphasis'>Why React Gameplay?</h3>
            <p>
              Dive into the world of game development with React as your trusted
              companion. This platform serves as a learning playground, where we explore
              the art of creating simple yet captivating games, unraveling React's
              lifecycles, and documenting the essential steps in the process.
            </p>
            <a href='#' className='icon-link'>
              Call to action
              <svg className='bi'>
                <use xlinkHref='#chevron-right'></use>
              </svg>
            </a>
          </div>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
              <svg className='bi' width='1em' height='1em'>
                <use xlinkHref='#people-circle'></use>
              </svg>
            </div>
            <h3 className='fs-2 text-body-emphasis'>Why Development with React?</h3>
            <p>
              React Gameplay aims to showcase why React is not just for building user
              interfaces. By harnessing its power for game development, we uncover a new
              realm of possibilities, blending the simplicity of React with the excitement
              of creating interactive and dynamic gaming experiences.
            </p>
            <a href='#' className='icon-link'>
              Call to action
              <svg className='bi'>
                <use xlinkHref='#chevron-right'></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
