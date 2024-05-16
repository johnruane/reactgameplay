import './panel.scss';

export default function Panel({ title, value }) {
  return (
    <div className='game-panel'>
      <p className='game-title'>{title}</p>
      <p className='game-value'>{value}</p>
    </div>
  );
}
