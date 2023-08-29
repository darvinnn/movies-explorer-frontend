import { useState } from 'react';
import { Link } from 'react-router-dom';

import useInput from '../../utils/Validation/Validation.jsx';
import ValidationError from '../ValidationError/ValidationError.jsx';

import style from './Profile.module.css';

function Profile() {
  const [areFieldsLocked, setAreFieldsLocked] = useState(true);

  const name = useInput('Максим', { isEmpty: null, minLength: 2, maxLength: 20 });
  const email = useInput('darvin@mail.ru', { isEmpty: null, isEmail: true });

  const handleSubmit = () => (name.isValidInput && email.isValidInput) && setAreFieldsLocked(true);

  return (
    <main className={style.profile}>
      <h1 className={style.profile__title}>Привет, Максим!</h1>
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
      <Link to="/" className={`${style.profile__exitButton} ${areFieldsLocked ? '' : style.hiddenElement}`}
        type="button">Выйти из аккаунта</Link>
    </main>
  );
}

export default Profile;
