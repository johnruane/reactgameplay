import './panel.scss';

export default function Panel({ sections }) {
  return (
    <div className='panel-wrapper'>
      {sections.map((section) => {
        const { heading = null, value = null } = section || {};
        return (
          <div className='panel' key={heading}>
            {heading !== null && <p className='panel-text panel-text-bold'>{heading}</p>}
            {value !== null && <p className='panel-text'>{value}</p>}
          </div>
        );
      })}
    </div>
  );
}
