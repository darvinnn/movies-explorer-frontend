import FilterCheckbox from './FilterCheckbox/FilterCheckbox.jsx';
import style from './SearchForm.module.css';

function SearchForm() {
  return (
    <section>
      <form className={style.searchForm}>
        <input className={style.searchForm__textField} placeholder="Фильм" />
        <input type="button" className={style.searchForm__button} value="Поиск" />
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
