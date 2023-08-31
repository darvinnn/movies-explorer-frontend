import { useState } from 'react';

import { getCards } from '../../utils/Api/MoviesApi.js';
import useInput from '../../utils/Validation/Validation.jsx';
import Preloader from '../Preloader/Preloader.jsx';

import More from './More/More.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';

import style from './Movies.module.css';

function Movies() {
  const [cards, setCards] = useState([]);
  const [requestIsSent, setRequestIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const searchInput = useInput('', { isEmpty: null });

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequestIsSent(true);
    if (!searchInput.isValidInput) return;

    setCards([]);
    setIsLoading(true);
    setIsError(false);
    getCards()
      .then(res => {
        setCards(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <main className={style.movies}>
      <SearchForm onSubmit={handleSubmit} searchInput={searchInput} requestIsSent={requestIsSent}
        setRequestIsSent={setRequestIsSent} />
      <div className={style.movies__line} />
      {isError && <p className={style.movies__error}>Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {isLoading ? <Preloader /> : <MoviesCardList cards={cards} />}
      <More />
    </main>
  );
}

export default Movies;
