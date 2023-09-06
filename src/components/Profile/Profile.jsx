import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '../../utils/Validation/Validation.jsx';
import ValidationError from '../ValidationError/ValidationError.jsx';
import { logout } from '../../utils/Api/MainApi.js';
import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

import style from './Profile.module.css';

function Profile() {
  const [, setIsLoggedIn] = useContext(IsLoggedInContext);
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [areFieldsLocked, setAreFieldsLocked] = useState(true);

  const name = useInput(currentUser.name, { isEmpty: null, minLength: 2, maxLength: 20 });
  const email = useInput(currentUser.email, { isEmpty: null, isEmail: true });

  const handleSubmit = () => (name.isValidInput && email.isValidInput) && setAreFieldsLocked(true);

  const handleExit = () => {
    logout()
      .then(() => {
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch(console.log);
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
        {(name.isDirty && !name.isValidInput)
          && <ValidationError>{name.errorMessage()}</ValidationError>}
        <div className={style.profile__line} />
        <div className={style.form__field}>
          <label htmlFor="emaail" className={style.form__title}>E-mail</label>
          <input id="email" className={style.form__input} type="email" onChange={email.onChange}
            onBlur={email.onBlur} value={email.value} disabled={areFieldsLocked} />
        </div>
        {(email.isDirty && !email.isValidInput)
          && <ValidationError>{email.errorMessage()}</ValidationError>}
        <input className={`${style.form__edit} ${areFieldsLocked ? '' : style.hiddenElement}`}
          type="button" onClick={() => setAreFieldsLocked(false)} value="Редактировать" />
        <input className={`${style.form__submitButton} ${areFieldsLocked ? style.hiddenElement : ''} 
          ${(name.isValidInput && email.isValidInput) ? '' : style.form__submitButton_disabled}`}
          type="button" onClick={handleSubmit} value="Сохранить" />
      </form>
      <button className={`${style.profile__exitButton} ${areFieldsLocked ? '' : style.hiddenElement}`}
        type="button" onClick={handleExit}>Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
