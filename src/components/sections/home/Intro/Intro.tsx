import styles from './style.module.css';

const Intro = () => {
  return (
    <>
      <h2 className={styles['it-heading']}>
        Welcome to React Gameplay, where coding meets gaming in the best way
        possible!
      </h2>
      <p className={styles['it-subheading']}>
        Ever wondered how the old classic games are built? Join me as I jump
        into the engaging world of game development, starting from ground zero.
        Together, we&apos;ll uncover the secrets behind these beloved classics,
        unravelling their complexities one line of code at a time and bring them
        to life before your very eyes.
      </p>
    </>
  );
};

export default Intro;
