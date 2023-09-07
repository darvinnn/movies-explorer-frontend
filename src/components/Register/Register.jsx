import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import Authorization from '../Authorization/Authorization.jsx';
import AuthorizationField from '../AuthorizationField/AuthorizationField.jsx';
import useInput from '../../utils/Validation/Validation.jsx';
import ValidationError from '../ValidationError/ValidationError.jsx';
import { login, register } from '../../utils/Api/MainApi.js';
import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';

function Register({ getUser }) {
  const name = useInput('', { isEmpty: null, minLength: 2, maxLength: 20 });
  const email = useInput('', { isEmpty: null, isEmail: true });
  const password = useInput('', { isEmpty: null, minLength: 8, maxLength: 25 });
  const [isLoggedIn] = useContext(IsLoggedInContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setError(false);
    register({ name: name.value, email: email.value, password: password.value })
      .then(() => {
        login({ email: email.value, password: password.value })
          .then(() => getUser());
      })
      .catch((err) => {
        if (err.status === 409) setError('Пользователь с таким email уже зарегистрирован');
        if (err.status === 400) setError('Некорректные данные пользователя');
      });
  };

  useEffect(() => {
    isLoggedIn && navigate('/movies');
  }, [isLoggedIn]);

  return (
    <>
      <Authorization error={error} onSubmit={handleSubmit} title="Добро пожаловать!" buttonValue="Зарегистрироваться"
        buttonIsActive={email.isValidInput && password.isValidInput && name.isValidInput}
        captionText="Уже зарегистрированы?" captionLink="Войти">
        <AuthorizationField onChange={name.onChange} onBlur={name.onBlur} isDirty={name.isDirty}
          isValid={name.isValidInput} value={name.value} title="Имя" />
        {(name.isDirty && !name.isValidInput) && <ValidationError>{name.errorMessage()}</ValidationError>}
        <AuthorizationField onChange={email.onChange} onBlur={email.onBlur} isDirty={email.isDirty}
          isValid={email.isValidInput} value={email.value}
          title="E-mail" inputType="email" />
        {(email.isDirty && !email.isValidInput) && <ValidationError>{email.errorMessage()}</ValidationError>}
        <AuthorizationField onChange={password.onChange} onBlur={password.onBlur} isDirty={password.isDirty}
          isValid={password.isValidInput} value={password.value}
          title="Пароль" inputType="password" />
        {(password.isDirty && !password.isValidInput) && <ValidationError>{password.errorMessage()}</ValidationError>}
      </Authorization>
    </>
  );
}

export default Register;
