import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './button.module.css';

export default function Button({ buttonClass, onClick }) {
  return (
    <button
      className={classNames(style.button, buttonClass)}
      type='button'
      onClick={() => onClick()}
    ></button>
  );
}

Button.propTypes = {
  buttonClass: PropTypes.string,
  onClick: PropTypes.func,
};
