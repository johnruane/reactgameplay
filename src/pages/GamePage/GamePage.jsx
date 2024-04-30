import { useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import classNames from 'classnames';

import Tabs from '@components/Tabs';
import pageData from '@data';
import Cross from '@icons/Cross';
import NextPrev from '@components/NextPrev';
import WaveDivider from '@components/WaveDivider';
import Modal from '@components/Modal';

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
      <WaveDivider background='yellow' clean />
      <div className='container background-black'>
        <div className='grid'>
          <div className='gp-intro-wrapper'>
            <div className='gp-heading-wrapper'>
              <button className='gp-game-button' onClick={handleButtonClick}>
                <span>Play Now</span>
              </button>
              <h1 className='gp-heading text-uppercase'>
                {id}
                <span className='gp-year'>{year}</span>
              </h1>
            </div>
            <div className='gp-details-wrapper'>
              <div className='space-text'>
                <p className='gp-details-title text-uppercase'>Complexity</p>
                <p>{complexity}</p>
              </div>

              <div className='space-text'>
                <p className='gp-details-title text-uppercase'>Controls</p>
                {controls}
              </div>

              <div className='space-text'>
                <p className='gp-details-title text-uppercase'>Intro</p>
                {intro}
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider background='yellow' clean flipX />

      <div className='container background-yellow'>
        <div className='grid'>
          <div className='gp-tabs-wrapper'>
            <Tabs data={tabs} />
            <NextPrev current={id} />
          </div>
        </div>
      </div>

      <div className='hm-wavy-wrapper'>
        <span className='hm-wavy-pink'></span>
        <span className='hm-wavy-black'></span>
      </div>

      <Modal title={id} isActive={gameSheetToggle} onCloseCallback={handleButtonClick}>
        {gameSheetToggle && game}
      </Modal>

      <WaveDivider background='yellow' clean />

      {gameSheetToggle && <RemoveScrollBar />}
    </>
  );
};

export default GamePage;
