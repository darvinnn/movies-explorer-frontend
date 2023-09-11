import style from './FilterCheckbox.module.css';

function FilterCheckbox({ isChecked, handleCheckbox }) {
  return (
    <div className={style.filterCheckbox}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckbox}
        id="toggle" className={style.filterCheckbox__checkbox} />
      <label htmlFor="toggle" className={style.filterCheckbox__button} />
      <p className={style.filterCheckbox__text}>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
