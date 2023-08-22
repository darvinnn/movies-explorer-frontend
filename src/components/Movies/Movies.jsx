import style from './Movies.module.css';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';

function Movies() {
  return (
    <main className={style.movies}>
      <SearchForm />
      <MoviesCardList />
      <div className={style.line} />
    </main>
  );
}

export default Movies;
