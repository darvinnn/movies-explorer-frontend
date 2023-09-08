import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '../../utils/Validation/Validation.jsx';
import ValidationError from '../ValidationError/ValidationError.jsx';
import { logout, updateUser } from '../../utils/Api/MainApi.js';
import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

import style from './Profile.module.css';

function Profile({ setUser }) {
  const [, setIsLoggedIn] = useContext(IsLoggedInContext);
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [areFieldsLocked, setAreFieldsLocked] = useState(true);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const name = useInput(currentUser.name, { isEmpty: null, minLength: 2, maxLength: 20 });
  const email = useInput(currentUser.email, { isEmpty: null, isEmail: true });
  console.log(currentUser);
  const handleSubmit = () => {
    setError(false);
    updateUser({ name: name.value, email: email.value })
      .then((res) => {
        setSuccessMessage('Данные успешно обновлены');
        setUser(res);
        setAreFieldsLocked(true);
      })
      .catch((err) => {
        if (err.status === 400) setError('Такой email уже занят');
        if (err.status === 401) setError('Некорректные данные пользователя');
      });
  };

  const handleChange = () => {
    setSuccessMessage(false);
    setAreFieldsLocked(false);
  };

  const handleExit = () => {
    logout()
      .then(() => {
        setIsLoggedIn(false);
        if (localStorage.getItem('searchRequest')) {
          localStorage.removeItem('searchRequest');
        }
        navigate('/');
      })
      .catch(() => setError('Что-то пошло не так'));
  };

  return (
    <main className={style.profile}>
      <h1 className={style.profile__title}>Привет, {currentUser.name}!</h1>
      <form className={style.form}>
        <div className={style.form__field}>
          <label htmlFor="name" className={style.form__title}>Имя</label>
          <input id="name" className={style.form__input}
            onChange={name.onChange} onBlur={name.onBlur}
            value={name.value} disabled={areFieldsLocked} />
        </div>
        {(name.isDirty && !name.isValidInput) && <ValidationError>{name.errorMessage()}</ValidationError>}
        <div className={style.profile__line} />
        <div className={style.form__field}>
          <label htmlFor="emaail" className={style.form__title}>E-mail</label>
          <input id="email" className={style.form__input} type="email" onChange={email.onChange}
            onBlur={email.onBlur} value={email.value} disabled={areFieldsLocked} />
        </div>
        {(email.isDirty && !email.isValidInput) && <ValidationError>{email.errorMessage()}</ValidationError>}
        {successMessage
          ? <span className={style.form__success}>{successMessage}</span>
          : <span className={style.form__error}>{error}</span>}
        <input className={`${style.form__edit} ${areFieldsLocked ? '' : style.hiddenElement}`}
          type="button" onClick={handleChange} value="Редактировать" />
        <input className={`${style.form__submitButton} ${areFieldsLocked ? style.hiddenElement : ''} 
          ${(!name.isValidInput || !email.isValidInput
            || ((name.value === currentUser.name) && (email.value === currentUser.email)))
            ? style.form__submitButton_disabled : ''}`}
          disabled={(!name.isValidInput || !email.isValidInput
            || ((name.value === currentUser.name) && (email.value === currentUser.email)))}
          type="button" onClick={handleSubmit} value="Сохранить" />
      </form>
      <button className={`${style.profile__exitButton} ${areFieldsLocked ? '' : style.hiddenElement}`}
        type="button" onClick={handleExit}>Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
