import Button from '../Button';
import LeftArrow from './Icons/LeftArrow';
import DownArrow from './Icons/DownArrow';
import RotateArrow from './Icons/RotateArrow';
import RightArrow from './Icons/RightArrow';
import style from './controls.module.css';

export default function Controls({ move }) {
  return (
    <div className={style.controls}>
      <Button buttonClass={style.left} onClick={() => move('ArrowLeft')}>
        <LeftArrow />
      </Button>
      <Button buttonClass={style.down} onClick={() => move('ArrowDown')}>
        <DownArrow />
      </Button>
      <Button buttonClass={style.rotate} onClick={() => move('Space')}>
        <RotateArrow />
      </Button>
      <Button buttonClass={style.right} onClick={() => move('ArrowRight')}>
        <RightArrow />
      </Button>
    </div>
  );
}
