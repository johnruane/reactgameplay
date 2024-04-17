import style from './panel.module.css';

export default function Panel({ title, value }) {
  return (
    <div className={style.panel}>
      <p className={style.title}>{title}</p>
      <p className={style.value}>{value}</p>
    </div>
  );
}
