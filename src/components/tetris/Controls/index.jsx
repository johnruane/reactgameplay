import Button from '../Button';
import PropTypes from 'prop-types';
import style from './controls.module.css';

export default function Controls({ move }) {
  return (
    <>
      <Button classname={style.left} onClick={() => move('ArrowLeft')} />
      <Button classname={style.down} onClick={() => move('ArrowDown')} />
      <Button classname={style.rotate} onClick={() => move('Space')} />
      <Button classname={style.right} onClick={() => move('ArrowRight')} />
    </>
  );
}

Controls.propTypes = {
  move: PropTypes.func,
};
