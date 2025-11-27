import Balls from './Balls/Balls';
import Bar from './Bar/Bar';
import SubText from './SubText/SubText';
import Title from './Title/Title';

import styles from './style.module.css';

const TextLogo = () => {
  return (
    <div className={styles['tl-text-logo-wrapper']}>
      <Balls />
      <Title />
      <Bar />
      <SubText />
    </div>
  );
};

export default TextLogo;
