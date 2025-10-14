import { useCallback, useEffect, useState } from 'react';

import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
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

import { Controls } from '../../reactgames/shared/components';

import {
  trackButtonClick,
  trackGameQuit,
  trackGameRestart,
  trackGameStart,
} from '@utils/analytics';
import useBouncingHead from '@utils/hooks/useBouncingHead';
import viewNavigate from '@utils/viewNavigate';

import useModalInteractions from '@components/Modal/hooks/useModalInteractions';

import pages from '@data/pages';

import Ghost from '@svg/games/ghost.svg?react';
import ArrowRight from '@svg/global/arrow-right.svg?react';
import Back from '@svg/global/back.svg?react';

import styles from './style.module.css';

const GamePage = () => {
  const { title } = useParams();
  const pageIndex = pages.findIndex(({ id }) => id === title);
  const pageData = pages[pageIndex];

  const {
    niceName,
    title: gameTitle,
    icon,
    year,
    complexity,
    controls,
    intro,
    tabs,
    link,
    instructions,
    game: GameComponent,
  } = pageData || {};

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

  const quitClickHandler = () => {
    trackGameQuit(niceName || 'unknown');
    setToggleModal(false);
  };

  const restartClickHandler = useCallback(() => {
    trackGameRestart(niceName || 'unknown');
    setGameKey?.((prev) => prev + 1);
  }, [setGameKey, niceName]);

  const prevPage = {
    id: pages[pageIndex - 1]?.id,
    title: pages[pageIndex - 1]?.id,
  };

  const nextPage = {
    id: pages[pageIndex + 1]?.id,
    title: pages[pageIndex + 1]?.id,
  };

  /*
   * Redirect to 404 if dynamic param title does not match id in page data
   */

  useEffect(() => {
    if (!pageData) {
      navigate('/404');
    }
  }, [navigate, pageData]);

  return (
    <>
      <Helmet>
        <title>
          {niceName
            ? `${niceName} - Play & Learn React | React Gameplay`
            : 'Game - React Gameplay'}
        </title>
        <meta
          name="description"
          content={`Play ${niceName} in your browser and explore the React code behind it. Learn coding concepts through classic games at React Gameplay.`}
        />
      </Helmet>

      <div
        className={classNames('grid background-black', styles['backWrapper'])}
      >
        <button
          className={styles.backBtn}
          onClick={() => {
            trackButtonClick('back', 'game_page');
            viewNavigate({ route: '/', navigate });
          }}
          aria-label="Back to homepage"
        >
          <Back />
        </button>
      </div>

      <section className="container background-black">
        <div className={classNames('grid', styles['sectionWrapper'])}>
          <div className={styles.textPositioning}>
            <h1 className="off-screen">
              {`${niceName} Game - How to build ${niceName} game with React.`}
            </h1>
            <h2 className={classNames(styles['heading'], 'text-uppercase')}>
              <span className={styles.year}>{year}</span>
              <span className={styles.title}>{gameTitle}</span>
            </h2>
            <Button
              text="PLAY NOW"
              onClick={() => {
                trackGameStart(niceName || 'unknown');
                setToggleModal(true);
              }}
              className={classNames('button', styles['playButton'])}
            >
              <ArrowRight />
            </Button>
          </div>
          <div className={classNames(styles['image'], 'fluid-img')}>{icon}</div>
        </div>
      </section>

      <div
        className={classNames('container background-black', styles['intro'])}
        data-stack="space-3xl-4xl"
      >
        <section className="grid" data-stack="space-l-xl">
          <div className={styles.headingWrapper}></div>
          <div className={styles.detailsWrapper} data-stack="space-m-l">
            <div data-stack="space-default">
              <p
                className={classNames(styles['detailsTitle'], 'text-uppercase')}
              >
                Complexity
              </p>
              <Complexity title="complexity" count={complexity} />
            </div>

            <div data-stack="space-default">
              <p
                className={classNames(styles['detailsTitle'], 'text-uppercase')}
              >
                Controls
              </p>
              {controls}
            </div>
          </div>
        </section>

        <section className="grid" data-stack="space-l-xl">
          <Heading title="INTRO" className="section-heading" />
          <div className={styles.introText} data-stack>
            {intro}
          </div>
        </section>
      </div>

      <Divider color="black" background="grey" />

      <section
        className={classNames(styles['tabs'], 'container background-grey')}
      >
        <div className="grid">
          <Ghost className={classNames(styles['ghostWrapper'], 'fluid-img')} />
        </div>

        <div data-stack="space-3xl-4xl">
          <div className="grid" data-stack="space-l-xl">
            <Heading
              title="DETAILS"
              className={classNames(
                'section-heading',
                styles['sectionHeading'],
              )}
            />
            <Tabs
              tabs={tabs}
              link={link}
              additionalTabsClasses={styles['tabsWrapper']}
              additionalTabsContentClasses={styles['tabsContent']}
            />
          </div>
          <NextPrev
            prev={prevPage}
            next={nextPage}
            additionalClasses={styles.npWrapper}
          />
        </div>
      </section>

      <Modal setToggleModal={setToggleModal}>
        <GameComponent
          key={gameKey}
          restartClickHandler={restartClickHandler}
        />
        {instructions}
        <div className={styles.gameControlsWrapper}>
          <Controls
            onStartClickHandler={restartClickHandler}
            onQuitClickHandler={quitClickHandler}
          />
        </div>
      </Modal>

      {removeScrollbar && <RemoveScrollBar />}
    </>
  );
};

export default GamePage;
