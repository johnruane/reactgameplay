import Button from '../Button';
import PropTypes from 'prop-types';
import style from './controls.module.css';

export default function Controls({ move }) {
  return (
    <div className={style.controls}>
      <Button buttonClass={style.left} onClick={() => move('ArrowLeft')} />
      <Button buttonClass={style.down} onClick={() => move('ArrowDown')} />
      <Button buttonClass={style.rotate} onClick={() => move('Space')} />
      <Button buttonClass={style.right} onClick={() => move('ArrowRight')} />
    </div>
  );
}

Controls.propTypes = {
  move: PropTypes.func,
};
