import style from './FilterCheckbox.module.css';

function FilterCheckbox() {
  return (
    <div className={style.FilterCheckbox}>
      <button className={style.FilterCheckbox__button} />
      <p className={style.FilterCheckbox__text}>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
