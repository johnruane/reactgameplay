import { Helmet } from 'react-helmet-async';

import { Heading } from '@sections';
import {
  About as AboutSection,
  Games as GamesSection,
  Intro as IntroSection,
  LevelUp as LevelUpSection,
} from '@sections';

import { Banner, Divider, TextLogo } from '@components';

import Pacman from '@motion/Pacman';

import styles from './style.module.css';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>React Gameplay - Classic Games in React</title>
        <meta
          name="description"
          content="Learn React by building and playing classic games like Tetris, Snake, and Minesweeper. Explore coding concepts through hands-on game projects at React Gameplay."
        />
      </Helmet>

      <section className="container background-yellow">
        <div className={`grid ${styles.sectionWrapper}`}>
          <div className={styles.textPositioning}>
            <TextLogo />
          </div>

          <div className={styles.pacmanSvgWrapper}>
            <Pacman />
          </div>
        </div>
      </section>

      <section
        className={`container background-yellow ${styles.intro}`}
        data-stack="space-3xl-4xl"
      >
        <div className={`grid ${styles.introWrapper}`} data-stack>
          <IntroSection />
        </div>
      </section>

      <Divider color="yellow" background="black" />

      <section
        className={`container background-black ${styles.games}`}
        data-stack="space-3xl-4xl"
      >
        <div id="games-section" className="grid" data-stack="space-l-xl">
          <Heading title="GAMES" className="section-heading" />
          <GamesSection additionalClasses={styles.gamesContentWrapper} />
        </div>
      </section>

      <Banner additionalClasses={styles.banner} />

      <section className={`container background-black ${styles.about}`}>
        <div className="grid" data-stack="space-l-xl">
          <Heading title="ABOUT" className="section-heading" />
          <div
            className={`${styles.sectionContentWrapper} ${styles.aboutWrapper}`}
            data-stack="space-2xl"
          >
            <AboutSection />
          </div>
        </div>
      </section>

      <Divider color="black" background="grey" />

      <section className={`container background-grey ${styles.levelUp}`}>
        <div className="grid">
          <LevelUpSection />
        </div>
      </section>
    </>
  );
}
