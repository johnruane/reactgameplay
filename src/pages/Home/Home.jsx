import classNames from 'classnames';
import { Link } from 'react-router-dom';
import imageUrl from '../../assets/homepage_image.png';
import style from './Home.module.css';

export default function Home() {
  return (
    <>
      <section className={style.main}>
        <div className='grid'>
          <h1 className={style.headingWrapper}>
            <span className={style.heading}>REACT</span>
            <span className={style.subHeading}> gameplay</span>
          </h1>
          <img src={imageUrl} width={500} />
        </div>
      </section>

      <div>
        <div>
          <div>
            <p>
              Welcome to React Gameplay, where coding meets gaming in the most playful way
              possible!
            </p>
            <p>
              Ever wondered how the old classic games are built? Join me as I delve into
              the fascinating world of game development, starting from ground zero.
              Together, we&apos;ll uncover the secrets behind these beloved classics,
              unravelling their complexities one line of code at a time and bring them to
              life before your very eyes.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p>GAMES</p>
        <div>
          <Link to={'/tetris'}>TETRIS</Link>
        </div>
        <div className='col-md-4'>
          <Link to={'/snake'}>SNAKE</Link>
        </div>
        <div className='col-md-4'>
          <Link to={'/snake'}>MINESWEEPER</Link>
        </div>
      </div>

      <div>
        <p>Ready to level up your coding skills while having a blast?</p>
        <p>
          Choose your game & explore the code. React Gameplay is your go-to destination
          for learning React through play.
        </p>
      </div>

      <div>
        <p>ABOUT</p>
        <div>
          <p>Learning Made Exciting and Interactive</p>
          <p>
            At React Gameplay, I firmly believe that learning should be an engaging and
            hands-on experience. That&apos;s why I&apos;ve meticulously curated a
            selection of well-known games, each tailored to cater to different skill
            levels. Get ready to immerse yourself in a world where fun meets learning.
          </p>
        </div>
        <div>
          <p>Guided Exploration: Your Path to Mastery</p>
          <p>
            Every game in our collection comes with invaluable insights and practical tips
            on fundamental concepts. From mastering state management to implementing
            intricate game mechanics, I&apos;ve got your back every step of the way.
            Together, we&apos;ll navigate through the intricacies of game development with
            confidence.
          </p>
        </div>
        <div>
          <p>Elevate Your Skills While Having Fun</p>
          <p>
            Are you prepared to elevate your coding prowess while embarking on an
            exhilarating journey? Take your pick from our array of games, dive deep into
            the code, and let the adventure begin. Whether you&apos;re here to play or to
            code, React Gameplay is your ultimate destination for a transformative
            learning experience.
          </p>
        </div>
      </div>
    </>
  );
}
