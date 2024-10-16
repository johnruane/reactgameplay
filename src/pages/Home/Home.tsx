import Heading from '@sections/Heading';
import AboutSection from '@sections/home/About';
import GamesSection from '@sections/home/Games';
import IntroSection from '@sections/home/Intro';
import LevelUpSection from '@sections/home/LevelUp';

import { Banner, Divider, TextLogo } from '@components';

import useBouncingHead from '@hooks/useBouncingHead';

import Pacman from '@svg/home/pacman.svg?react';

import './home.scss';

export default function Home() {
  useBouncingHead();

  return (
    <>
      <section className="container background-yellow">
        <div className="grid hm-section-wrapper">
          <div className="hm-text-positioning">
            <TextLogo />
          </div>

          <Pacman className="hm-pacman-svg fluid-img gsap-bouncing" />
        </div>
      </section>

      <section
        className="container background-yellow hm-intro"
        data-stack="space-3xl-4xl"
      >
        <div className="grid hm-intro-wrapper" data-stack>
          <IntroSection />
        </div>
      </section>

      <Divider color="yellow" background="black" />

      <section
        className="container background-black hm-games"
        data-stack="space-3xl-4xl"
      >
        <div id="games-section" className="grid" data-stack="space-l-xl">
          <Heading title="GAMES" className="section-heading" />
          <GamesSection additionalClasses="hm-games-content-wrapper" />
        </div>
      </section>

      <Banner additionalClasses="hm-banner" />

      <section className="container background-black hm-about">
        <div className="grid" data-stack="space-l-xl">
          <Heading title="ABOUT" className="section-heading" />
          <div
            className="hm-section-content-wrapper hm-about-wrapper"
            data-stack="space-2xl"
          >
            <AboutSection />
          </div>
        </div>
      </section>

      <Divider color="black" background="grey" />

      <section className="container background-grey hm-level-up">
        <div className="grid">
          <LevelUpSection />
        </div>
      </section>
    </>
  );
}
