import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';

import style from './MoviesCardList.module.css';

function MoviesCardList({ cards }) {
  const isSavedMovies = useLocation().pathname === '/saved-movies';
  return (
    <section className={style.cadrList}>
      {cards.map(card => (<MoviesCard key={card.id} isSavedMovie={isSavedMovies} card={card} />))}
    </section>
  );
}

export default MoviesCardList;
