import { useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import classNames from 'classnames';

import Tabs from '@components/Tabs';
import pageData from '@data';
import Cross from '@icons/Cross';

import './GamePage.scss';

const GamePage = () => {
  const [gameSheetToggle, setGameSheetToggle] = useState(false);

  const { title } = useParams();
  const navigate = useNavigate();

  const data = pageData.find(({ id }) => id === title);

  /*
   * Redirect to 404 if dynamic param title does not match id in page data
   */

  if (!data) {
    navigate('/404');
  }

  const { id, year, complexity, controls, intro, tabs, game } = data || {};

  const handleButtonClick = useCallback(() => {
    setGameSheetToggle((prev) => !prev);
  }, [setGameSheetToggle]);

  return (
    <>
      <div className='container background-black'>
        <div className='grid'>
          <div className='gp-intro-wrapper'>
            <div className='gp-heading-wrapper'>
              <button className='gp-game-button' onClick={handleButtonClick}>
                Play Now
              </button>
              <h1 className='gp-heading'>
                {id}
                <span className='gp-year'>{year}</span>
              </h1>
            </div>
            <div className='gp-details-wrapper'>
              <div>
                <p className='gp-details-heading'>Complexity</p>
                <p>{complexity}</p>
              </div>

              <div>
                <p className='gp-details-heading'>Controls</p>
                {controls}
              </div>

              <div>
                <p className='gp-details-heading'>Intro</p>
                {intro}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hm-wavy-wrapper flip-vertical'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      <div className='container background-yellow'>
        <div className='grid'>
          <div className='gp-tabs-wrapper'>
            <Tabs data={tabs} />
          </div>
        </div>
      </div>

      <div className='hm-wavy-wrapper'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      <div
        className={classNames('container background-yellow gp-gamesheet-wrapper', {
          ['active']: gameSheetToggle,
        })}
      >
        <div className='grid'>
          <div className='gp-gamesheet-content-wrapper'>
            <div className='gp-gamesheet-heading-wrapper'>
              <h2 className='gp-gamesheet-heading'>{id}</h2>

              <button className='gp-game-close-button' onClick={handleButtonClick}>
                <Cross />
              </button>
            </div>
            {game}
          </div>
        </div>
      </div>
      {gameSheetToggle && <RemoveScrollBar />}
    </>
  );
};

export default GamePage;
