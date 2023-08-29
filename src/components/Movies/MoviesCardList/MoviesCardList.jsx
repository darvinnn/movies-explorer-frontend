import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';

import style from './MoviesCardList.module.css';

function MoviesCardList() {
  const isSavedMovies = useLocation().pathname === '/saved-movies';
  return (
    <section className={style.cadrList}>
      <MoviesCard isSavedMovie={isSavedMovies} />
      <MoviesCard isSavedMovie={isSavedMovies} />
      <MoviesCard isSavedMovie={isSavedMovies} />
      <MoviesCard isSavedMovie={isSavedMovies} />
      <MoviesCard isSavedMovie={isSavedMovies} />
      <MoviesCard isSavedMovie={isSavedMovies} />
    </section>
  );
}

export default MoviesCardList;
