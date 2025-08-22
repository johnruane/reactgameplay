import classNames from 'classnames';

import styles from './style.module.css';

const colours = {
  RED: '#D97A7A',
  ORANGE: '#E3A76F',
  YELLOW: '#E6D27A',
  GREEN: '#8BBF92',
  TEAL: '#7FB7B7',
  BLUE: '#7A9ED9',
  INDIGO: '#8C7AD9',
  VIOLET: '#B18CCB',
  BROWN: '#A8917A',
};

const Cell = ({
  dataRow,
  dataCell,
  dataValue,
  disable,
  onClickHandler,
  additionalClasses,
}: {
  dataRow?: number;
  dataCell?: number;
  dataValue?: number;
  onClickHandler?: (
    e: React.MouseEvent<HTMLSpanElement>,
    direction?: string,
  ) => void;
  additionalClasses?: string;
  disable?: boolean;
}) => {
  function handleRightClick(e) {
    e.preventDefault();
    if (onClickHandler) {
      onClickHandler(e, 'backwards');
    }
  }

  return (
    <>
      <div
        className={classNames(styles['cell'], additionalClasses)}
        data-row={dataRow}
        data-cell={dataCell}
        data-value={String(dataValue)}
        onClick={!disable ? onClickHandler : undefined}
        onContextMenu={!disable ? handleRightClick : undefined}
        data-disable={disable}
      >
        <div
          className={classNames(
            styles['colour-palette-wrapper'],
            styles['hide'],
          )}
        >
          {Object.entries(colours).map(([key, value]) => (
            <span
              key={key}
              className={classNames(
                styles[`colour-${key.toLowerCase()}`],
                styles['colour-dot'],
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cell;
