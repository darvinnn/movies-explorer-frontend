import style from './More.module.css';

function More() {
  return (
    <div className={style.more}>
      <button className={style.more__button} type="button">Ещё</button>
    </div>
  );
}

export default More;
