import { useEffect } from 'react';

import { useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RemoveScrollBar } from 'react-remove-scroll-bar';

import pages from '@data/pages';
import Tabs from '@components/Tabs';
import NextPrev from '@components/NextPrev';
import WaveDivider from '@components/WaveDivider';
import Modal from '@components/Modal';
import Heading from '@components/sections/Heading';
import Button from '@components/Button';

import './GamePage.scss';

const GamePage = () => {
  const [gameSheetToggle, setGameSheetToggle] = useState(false);

  const { title } = useParams();
  const navigate = useNavigate();

  const pageIndex = pages.findIndex(({ id }) => id === title);
  const pageData = pages[pageIndex];

  const prevPage = {
    id: pages[pageIndex - 1]?.id,
    title: pages[pageIndex - 1]?.title,
  };

  const nextPage = {
    id: pages[pageIndex + 1]?.id,
    title: pages[pageIndex + 1]?.title,
  };

  /*
   * Redirect to 404 if dynamic param title does not match id in page data
   */

  useEffect(() => {
    if (!pageData) {
      navigate('/404');
    }
  }, [pageData]);

  const { id, year, complexity, controls, intro, tabs, game } = pageData || {};

  const handleButtonClick = useCallback(() => {
    setGameSheetToggle((prev) => !prev);
  }, [setGameSheetToggle]);

  return (
    <>
      <WaveDivider background='yellow' clean />
      <div className='container background-black gp-intro' data-stack='space-3xl-4xl'>
        <section className='grid' data-stack='space-l-xl'>
          <div className='gp-heading-wrapper'>
            <Button text='PLAY NOW' onClickCallback={handleButtonClick} />
            <h1 className='gp-heading text-uppercase'>
              {id}
              <span className='gp-year'>{year}</span>
            </h1>
          </div>
          <div className='gp-details-wrapper' data-stack='space-m-l'>
            <div data-stack='space-default'>
              <p className='gp-details-title text-uppercase'>Complexity</p>
              <p>{complexity}</p>
            </div>

            <div data-stack='space-default'>
              <p className='gp-details-title text-uppercase'>Controls</p>
              {controls}
            </div>
          </div>
        </section>

        <section className='grid' data-stack='space-l-xl'>
          <Heading title='INTRO' className='gp-intro-wrapper' />
          <div className='gp-intro-text'>{intro}</div>
        </section>
      </div>

      <WaveDivider background='yellow' clean flipWaveX />

      <div className='container background-yellow'>
        <div className='grid'>
          <div className='gp-tabs-wrapper'>
            <Tabs data={tabs} />
            <NextPrev prev={prevPage} next={nextPage} />
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
