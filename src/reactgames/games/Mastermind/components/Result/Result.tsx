import Cell from '../Cell';
import classNames from 'classnames';

import styles from './style.module.css';

const Result = ({
  rowIndex,
  resultValues,
}: {
  rowIndex: number;
  resultValues: number[];
}) => {
  return (
    <div className={styles['result']}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Cell
          key={`result-cell-${rowIndex}-${index}`}
          dataValue={resultValues[index]}
          additionalClasses={classNames(
            styles['result-cell'],
            styles[`result-cell-${index + 1}`],
          )}
        />
      ))}
    </div>
  );
};

export default Result;
