import FilterCheckbox from './FilterCheckbox/FilterCheckbox.jsx';
import style from './SearchForm.module.css';

function SearchForm() {
  return (
    <section>
      <form >
        <div className={style.searchForm} >
          <input className={style.searchForm__textField} required placeholder="Фильм" />
          <input type="submit" className={style.searchForm__button} value="Поиск" />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
