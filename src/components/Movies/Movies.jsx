import { useEffect, useState } from 'react';

import { getCards } from '../../utils/Api/MoviesApi.js';
import useInput from '../../utils/Validation/Validation.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import { getMovies } from '../../utils/Api/MainApi.js';

import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';

import style from './Movies.module.css';

function Movies() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [requestIsSent, setRequestIsSent] = useState(false);
  const [isSavedMoviesLoading, setIsSavedMoviesLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const searchInput = useInput('', { isEmpty: null });
  const localStorageRequest = JSON.parse(localStorage.getItem('searchRequest'));

  useEffect(() => {
    setCards(filterMoviesDuration(allCards, isChecked));
  }, [isChecked]);

  useEffect(() => {
    if (localStorageRequest) {
      searchInput.onChange({
        target: {
          value: localStorageRequest.fieldText,
        },
      });
      setAllCards(localStorageRequest.cards);
      setCards(filterMoviesDuration((localStorageRequest.cards), localStorageRequest.isChecked));
      setIsChecked(localStorageRequest.isChecked);
    }
  }, []);

  useEffect(() => {
    setIsSavedMoviesLoading(true);
    getMovies()
      .then(cards => {
        setSavedMoviesList(cards);
        setIsSavedMoviesLoading(false);
      })
      .catch(() => setIsSavedMoviesLoading(false));
  }, []);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const filterMovies = (movies) => {
    const request = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter((movie) => (movie.nameRU.toLowerCase().includes(request)
      || movie.nameEN.toLowerCase().includes(request)));
    return filteredMovies;
  };

  const filterMoviesDuration = (movies, isOnlyShortMeter) => {
    if (!isOnlyShortMeter) return movies;
    else return movies.filter((movie) => movie.duration <= 40);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequestIsSent(true);
    if (!searchInput.isValidInput) return;
    setCards([]);
    setIsLoading(true);
    setIsError(false);
    getCards()
      .then(res => {
        const filteredCards = filterMovies(res);
        setAllCards(filteredCards);
        const filteredCardsWithDuration = filterMoviesDuration(filteredCards, isChecked);
        setCards(filteredCardsWithDuration);
        setIsLoading(false);
        const searchRequest = {
          fieldText: searchInput.value,
          cards: filteredCards,
          isChecked: isChecked,
        };
        localStorage.setItem('searchRequest', JSON.stringify(searchRequest));
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  const showContent = () => {
    if (isError) return (
      <p className={`${style.movies__text} ${style.movies__text_error}`}>Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
    );
    if (isLoading || isSavedMoviesLoading) return <Preloader />;
    else if (searchInput.isValidInput && requestIsSent && cards.length === 0) {
      return (<p className={style.movies__text}>Ничего не найдено</p>);
    }
    else return (<MoviesCardList cards={cards} savedMoviesList={savedMoviesList} />);
  };

  return (
    <main className={style.movies}>
      <SearchForm onSubmit={handleSubmit} searchInput={searchInput} requestIsSent={requestIsSent}
        setRequestIsSent={setRequestIsSent} handleCheckbox={handleCheckbox} isChecked={isChecked} />
      <div className={style.movies__line} />
      {showContent()}
    </main>
  );
}

export default Movies;
