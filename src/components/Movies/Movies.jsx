import More from './More/More.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
import style from './Movies.module.css';

function Movies() {
  return (
    <main className={style.movies}>
      <SearchForm />
      <div className={style.movies__line} />
      <MoviesCardList />
      <More />
    </main>
  );
}

export default Movies;
