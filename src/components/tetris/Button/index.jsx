import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './button.module.css';

export default function Button({ classname, onClick }) {
  return (
    <button
      className={classNames(style.button, classname)}
      type='button'
      onClick={() => onClick()}
    ></button>
  );
}

Button.propTypes = {
  classname: PropTypes.string,
  onClick: PropTypes.func,
};
