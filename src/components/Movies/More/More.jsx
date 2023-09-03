import style from './More.module.css';

function More({ onClick }) {
  return (
    <div className={style.more}>
      <button className={style.more__button} onClick={onClick} type="button">Ещё</button>
    </div>
  );
}

export default More;
