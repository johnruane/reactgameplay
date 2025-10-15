import { useState } from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

import { Complexity } from '@components';

import viewNavigate from '@utils/viewNavigate';

import gameLinks from '@data/games/gameLinks';

import ArrowRight from '@svg/global/arrow-right.svg?react';

import styles from './style.module.css';

const Games = ({ additionalClasses }) => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState('');

  return (
    <div className={classNames(styles['gs-main'], additionalClasses)}>
      {gameLinks.map((game, index) => {
        const { link, title, intro, icon, level, inDev = false } = game || {};
        const id = `${title}-${index}`;
        return (
          <button
            id={id}
            onClick={() => viewNavigate({ route: link, navigate })}
            className={styles['gs-tile']}
            key={id}
            data-gsap="game-tile"
            onMouseEnter={() => setIsHovered(id)}
            onMouseLeave={() => setIsHovered('')}
          >
            <span className={styles['gs-title']}>{title}</span>
            <span className={styles['gs-intro']}>{intro}</span>

            <motion.span
              className={classNames('fluid-img', styles['gs-icon'])}
              initial={{ y: 0 }}
              animate={{
                y: isHovered === id ? [0, -3] : 0,
              }}
              transition={{
                repeatType: isHovered === id ? 'reverse' : undefined,
                duration: 0.3,
                ease: 'easeOut',
                repeat: isHovered === id ? Infinity : 0,
              }}
            >
              {icon}
            </motion.span>

            <div className={styles['gs-level-wrapper']}>
              <Complexity title={title} count={level} />
            </div>

            {inDev ? (
              <span className={styles['gs-link']}>IN DEVELOPMENT</span>
            ) : (
              <div className={classNames(styles['lc-link'], styles['gs-link'])}>
                <span>Go to game</span>
                <ArrowRight className="fluid-img" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Games;
