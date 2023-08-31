import ValidationError from '../../ValidationError/ValidationError.jsx';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox.jsx';

import style from './SearchForm.module.css';

function SearchForm({ searchInput, onSubmit, requestIsSent, setRequestIsSent }) {

  const handleFocus = () => setRequestIsSent(false);

  return (
    <section>
      <form onSubmit={onSubmit} >
        <div className={style.searchForm} >
          <input className={style.searchForm__textField} onFocus={handleFocus}
            value={searchInput.value} onChange={searchInput.onChange} placeholder="Фильм" />
          <input type="submit" className={style.searchForm__button} value="Поиск" />
        </div>
        {(requestIsSent && !searchInput.isValidInput)
          && <ValidationError>Нужно ввести ключевое слово</ValidationError>}
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
