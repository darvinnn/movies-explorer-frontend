import { useEffect, useState } from 'react';

import useInput from '../../utils/Validation/Validation.jsx';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import { getMovies } from '../../utils/Api/MainApi.js';

import style from './SavedMovies.module.css';

function SavedMovies() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [requestIsSent, setRequestIsSent] = useState(false);
  const searchInput = useInput('', { isEmpty: null });

  const handleCheckbox = () => setIsChecked(!isChecked);

  const filterMoviesDuration = (movies, isOnlyShortMeter) => {
    if (!isOnlyShortMeter) return movies;
    else return movies.filter((movie) => movie.duration <= 40);
  };

  const filterMovies = (movies) => {
    const request = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter((movie) => (movie.nameRU.toLowerCase().includes(request)
      || movie.nameEN.toLowerCase().includes(request)));
    return filteredMovies;
  };

  useEffect(() => {
    setCards(filterMoviesDuration(filteredCards, isChecked));
  }, [isChecked]);

  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then((res) => {
        setAllCards(res);
        setCards(res);
        setFilteredCards(res);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);


  const handleDeleteCard = (movieId) => {
    setCards(prevCards => prevCards.filter(card => card.movieId != movieId));
    setAllCards(prevCards => prevCards.filter(card => card.movieId != movieId));
    setFilteredCards(prevCards => prevCards.filter(card => card.movieId != movieId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequestIsSent(true);
    if (!searchInput.isValidInput) return;
    const filtered = filterMovies(allCards);
    setFilteredCards(filtered);
    setCards(filterMoviesDuration(filtered, isChecked));
  };

  const showContent = () => {
    if (isError) return (
      <p className={`${style.movies__text} ${style.movies__text_error}`}>Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
    );
    if (isLoading) return <Preloader />;
    else if (searchInput.isValidInput && requestIsSent && cards.length === 0) {
      return (<p className={style.movies__text}>Ничего не найдено</p>);
    }
    else return (<MoviesCardList cards={cards} handleDeleteCard={handleDeleteCard} />);
  };

  return (
    <main className={style.savedMovies}>
      <SearchForm onSubmit={handleSubmit} searchInput={searchInput} requestIsSent={requestIsSent}
        setRequestIsSent={setRequestIsSent} handleCheckbox={handleCheckbox} isChecked={isChecked} />
      <div className={style.savedMovies__line} />
      {showContent()}
    </main>
  );
}

export default SavedMovies;
