import style from './SearchForm.module.css';

function SearchForm() {
  return (
    <section>
      <form className={style.searchForm}>
        <input className={style.textField} placeholder='Фильм' />
        <input type="button" className={style.button} value='Поиск' />
      </form>
      <div className={style.shortMeter}>
        <button className={style.shortMeter__button} />
        <p className={style.shortMeter__text}>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
