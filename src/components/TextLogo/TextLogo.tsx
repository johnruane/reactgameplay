import useLogoAnimation from './useLogoAnimation';

import styles from './style.module.css';

const TextLogo = () => {
  useLogoAnimation();

  return (
    <div className={styles['tl-text-logo-wrapper']}>
      <div className={styles['tl-pink-ball-wrapper']}>
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
        <span className={styles['tl-pink-ball']} />
      </div>
      <div className={styles['tl-logo-main-text']}>
        <span>R</span>
        <span>E</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
      </div>
      <div className={styles['tl-bar']} />
      <span className={styles['tl-logo-sub-text']}>GAMEPLAY</span>
    </div>
  );
};

export default TextLogo;
