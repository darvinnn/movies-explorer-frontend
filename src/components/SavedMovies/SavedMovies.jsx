import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm.jsx';

import style from './SavedMovies.module.css';

function SavedMovies() {
  return (
    <main className={style.savedMovies}>
      <SearchForm />
      <div className={style.savedMovies__line} />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
