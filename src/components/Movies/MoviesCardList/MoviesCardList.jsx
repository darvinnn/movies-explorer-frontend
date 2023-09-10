import { useLocation } from 'react-router-dom';
import { memo, useEffect, useRef, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import More from '../More/More.jsx';

import style from './MoviesCardList.module.css';

const MoviesCardList = memo(function MoviesCardList({ cards, savedMoviesList, handleDeleteCard }) {
  const isSavedMoviesPage = useLocation().pathname === '/saved-movies';
  const listRef = useRef();
  const [columns, setColumns] = useState(null);
  const [visibleCardsNumber, setVisibleCardsNumber] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const visibleCards = cards.slice(0, visibleCardsNumber);

  const handleMoreButton = () => {
    setVisibleCardsNumber(prevValue => {
      if (columns === 1) return 2;
      if (prevValue % columns === 0) return prevValue + columns;
      const additional = columns - (prevValue % columns);
      return prevValue + columns + additional;
    });
  };

  useEffect(() => {
    const computedCardList = window.getComputedStyle(listRef.current);
    const columnsNumber = computedCardList.getPropertyValue('grid-template-columns').split(' ').length;
    setColumns(columnsNumber);
    setVisibleCardsNumber(columnsNumber > 1 ? columnsNumber * 4 : 5);

    const resizeHandler = () => {
      setColumns(computedCardList.getPropertyValue('grid-template-columns').split(' ').length);
    };
    window.addEventListener('resize', resizeHandler);

    return function clean() {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const setSavedMovie = (movie) => {
    return savedMoviesList.find((savedMovie) => {
      return savedMovie.movieId === movie.id;
    });
  };

  const showCards = () => {
    if (isSavedMoviesPage) return (cards.map(card => (<MoviesCard setErrorMessage={setErrorMessage}
      key={card.movieId} savedMovie={card} isSavedMoviesPage={isSavedMoviesPage}
      handleDeleteCard={handleDeleteCard} card={card} />)));
    else return (visibleCards.map(card => (<MoviesCard setErrorMessage={setErrorMessage} key={card.id}
      savedMovie={setSavedMovie(card)} isSavedMoviesPage={isSavedMoviesPage} card={card} />)));
  };

  return (
    <section >
      <p className={style.error}>{errorMessage}</p>
      <ul ref={listRef} id="cardList" className={style.cardList}>
        {showCards()}
      </ul>
      {(!isSavedMoviesPage && visibleCards.length != cards.length) && <More onClick={handleMoreButton} />}
    </section>
  );
});

export default MoviesCardList;
