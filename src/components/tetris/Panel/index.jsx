import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './panel.module.css';

export default function Panel({ additionalClasses, label, value }) {
  return (
    <div
      className={classNames(
        style.score,
        style.panel,
        style.shadow,
        style[`${additionalClasses}`],
        'data-wrapper'
      )}
    >
      <p className='data-title'>{label}</p>
      <p className='data-value'>{value}</p>
    </div>
  );
}

Panel.propTypes = {
  additionalClasses: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
};
