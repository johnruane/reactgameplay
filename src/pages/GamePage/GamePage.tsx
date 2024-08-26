import { useEffect, useCallback, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import classNames from 'classnames';

import pages from '@data/pages';

import Tabs from '@components/Tabs';
import NextPrev from '@components/NextPrev';
import Divider from '@components/Divider';
import Modal from '@components/Modal';
import Heading from '@components/sections/Heading';
import Button from '@components/Button';

import Ghost from '@icons/Ghost';
import Back from '@icons/Back';
import ArrowCircleRight from '@icons/ArrowCircleRight';

import useBouncingHead from '@hooks/useBouncingHead';

import './GamePage.scss';

const GamePage = () => {
  const [gameSheetToggle, setGameSheetToggle] = useState(false);

  const { title } = useParams();
  const navigate = useNavigate();

  useBouncingHead();

  const pageIndex = pages.findIndex(({ id }) => id === title);
  const pageData = pages[pageIndex];

  const prevPage = {
    id: pages[pageIndex - 1]?.id,
    title: pages[pageIndex - 1]?.link,
  };

  const nextPage = {
    id: pages[pageIndex + 1]?.id,
    title: pages[pageIndex + 1]?.link,
  };

  /*
   * Redirect to 404 if dynamic param title does not match id in page data
   */

  useEffect(() => {
    if (!pageData) {
      navigate('/404');
    }
  }, [pageData]);

  const {
    title: gameTitle,
    icon,
    year,
    complexity,
    controls,
    intro,
    tabs,
    game: GameComponent,
  } = pageData || {};

  const handleButtonClick = useCallback(() => {
    setGameSheetToggle((prev) => !prev);
  }, [setGameSheetToggle]);

  return (
    <>
      <div className='grid background-black gp-back-wrapper'>
        <Link to={'..'}>
          <Back className='fluid-img' />
        </Link>
      </div>

      <section className='container background-black'>
        <div className='grid gp-section-wrapper'>
          <div className='gp-text-positioning'>
            <h1 className='gp-heading text-uppercase'>
              <span className='gp-year'>{year}</span>
              <span className='gp-title'>{gameTitle}</span>
            </h1>
            <Button
              text='PLAY NOW'
              onClickCallback={handleButtonClick}
              className='gp-play-button'
            />
          </div>
          <div className='gp-image fluid-img'>{icon}</div>
        </div>
      </section>

      <div className='container background-black gp-intro' data-stack='space-3xl-4xl'>
        <section className='grid' data-stack='space-l-xl'>
          <div className='gp-heading-wrapper'></div>
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
          <Heading title='INTRO' className='section-heading' />
          <div className='gp-intro-text' data-stack>
            {intro}
          </div>
        </section>
      </div>

      <Divider color='black' background='grey' />

      <section className='container background-grey gp-tabs'>
        <div className='grid'>
          <Ghost className='gp-ghost-wrapper fluid-img' />
        </div>

        <div data-stack='space-3xl-4xl'>
          <div className='grid' data-stack='space-l-xl'>
            <Heading title='DETAILS' className='section-heading' />
            <Tabs data={tabs} />
          </div>
          <NextPrev prev={prevPage} next={nextPage} additionalClasses='gp-np-wrapper' />
        </div>
      </section>
      <button
        className={classNames('modal-close-btn', {
          ['hide']: !gameSheetToggle,
        })}
        onClick={() => handleButtonClick()}
        aria-label='Close modal'
      >
        <ArrowCircleRight className='modal-close-svg' />
      </button>

      <Modal isActive={gameSheetToggle}>
        <GameComponent onSelectClickHandler={handleButtonClick} />
      </Modal>

      {gameSheetToggle && <RemoveScrollBar />}
    </>
  );
};

export default GamePage;
