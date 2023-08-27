import style from './FilterCheckbox.module.css';

function FilterCheckbox() {
  return (
    <div className={style.filterCheckbox}>
      <input type="checkbox" defaultChecked id="toggle" className={style.filterCheckbox__checkbox} />
      <label htmlFor="toggle" className={style.filterCheckbox__button} />
      <p className={style.filterCheckbox__text}>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
