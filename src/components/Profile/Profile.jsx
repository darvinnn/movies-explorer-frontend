import { useState } from 'react';

import style from './Profile.module.css';
function Profile() {
  const [areFieldsLocked, setAreFieldsLocked] = useState(true);
  const handleFormEditButton = () => setAreFieldsLocked(prevValue => !prevValue);
  return (
    <main className={style.profile}>
      <h2 className={style.profile__title}>{areFieldsLocked ? 'Привет, Максим!' : 'Отредактируйте поля'}</h2>
      <form className={style.form}>
        <div className={style.form__field}>
          <p className={style.form__title}>Имя</p>
          <input className={style.form__input} placeholder="Максим" disabled={areFieldsLocked} />
        </div>
        <div className={style.profile__line} />
        <div className={style.form__field}>
          <p className={style.form__title}>E-mail</p>
          <input className={style.form__input} type="email" placeholder="darvin@mail.ru" disabled={areFieldsLocked} />
        </div>
        <input className={style.form__edit} type="button" onClick={handleFormEditButton} value={areFieldsLocked ? 'Редактировать' : 'Сохранить изменения'} />
      </form>
      <button className={style.profile__exitButton} type="button" >Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
