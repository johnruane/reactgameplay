import { useCallback, useEffect, useState } from 'react';

import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useNavigate, useParams } from 'react-router-dom';

import { Heading } from '@sections';

import {
  Button,
  Complexity,
  Divider,
  Modal,
  NextPrev,
  Tabs,
} from '@components';

import useBouncingHead from '@utils/hooks/useBouncingHead';
import viewNavigate from '@utils/viewNavigate';

import useModalInteractions from '@components/Modal/hooks/useModalInteractions';

import pages from '@data/pages';

import Ghost from '@svg/games/ghost.svg?react';
import ArrowRight from '@svg/global/arrow-right.svg?react';
import Back from '@svg/global/back.svg?react';

import './style.css';

const GamePage = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const [gameKey, setGameKey] = useState(0); // Used to reset component state
  const [removeScrollbar, setRemoveScrollbar] = useState(false);

  const modalCloseCallback = () => {
    setGameKey((prev) => prev + 1);
    setRemoveScrollbar(false);
  };

  const modalOpenCallback = () => {
    setRemoveScrollbar(true);
  };

  useBouncingHead();

  const { setToggleModal } = useModalInteractions({
    onModalOpenCallback: modalOpenCallback,
    onModalCloseCompleteCallback: modalCloseCallback,
  });

  const setRestartGame = useCallback(() => {
    setGameKey?.((prev) => prev + 1);
  }, [setGameKey]);
  console.log(pages);
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
  }, [navigate, pageData]);

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

  return (
    <>
      <div className="grid background-black gp-back-wrapper">
        <button
          className="gp-back-btn"
          onClick={() => viewNavigate({ route: '/', navigate })}
          aria-label="Back to homepage"
        >
          <Back />
        </button>
      </div>

      <section className="container background-black">
        <div className="grid gp-section-wrapper">
          <div className="gp-text-positioning">
            <h1 className="gp-heading text-uppercase">
              <span className="gp-year">{year}</span>
              <span className="gp-title">{gameTitle}</span>
            </h1>
            <Button
              text="PLAY NOW"
              onClick={() => setToggleModal(true)}
              className="button gp-play-button"
            >
              <ArrowRight />
            </Button>
          </div>
          <div className="gp-image fluid-img">{icon}</div>
        </div>
      </section>

      <div
        className="container background-black gp-intro"
        data-stack="space-3xl-4xl"
      >
        <section className="grid" data-stack="space-l-xl">
          <div className="gp-heading-wrapper"></div>
          <div className="gp-details-wrapper" data-stack="space-m-l">
            <div data-stack="space-default">
              <p className="gp-details-title text-uppercase">Complexity</p>
              <Complexity title="complexity" count={complexity} />
            </div>

            <div data-stack="space-default">
              <p className="gp-details-title text-uppercase">Controls</p>
              {controls}
            </div>
          </div>
        </section>

        <section className="grid" data-stack="space-l-xl">
          <Heading title="INTRO" className="section-heading" />
          <div className="gp-intro-text" data-stack>
            {intro}
          </div>
        </section>
      </div>

      <Divider color="black" background="grey" />

      <section className="container background-grey gp-tabs">
        <div className="grid">
          <Ghost className="gp-ghost-wrapper fluid-img" />
        </div>

        <div data-stack="space-3xl-4xl">
          <div className="grid" data-stack="space-l-xl">
            <Heading title="DETAILS" className="section-heading" />
            <Tabs data={tabs} />
          </div>
          <NextPrev
            prev={prevPage}
            next={nextPage}
            additionalClasses="gp-np-wrapper"
          />
        </div>
      </section>

      <Modal setToggleModal={setToggleModal}>
        <GameComponent key={gameKey} setRestartGame={setRestartGame} />
      </Modal>

      {removeScrollbar && <RemoveScrollBar />}
    </>
  );
};

export default GamePage;
