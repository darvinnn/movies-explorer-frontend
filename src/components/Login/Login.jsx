import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import Authorization from '../Authorization/Authorization.jsx';
import AuthorizationField from '../AuthorizationField/AuthorizationField.jsx';
import useInput from '../../utils/Validation/Validation.jsx';
import ValidationError from '../ValidationError/ValidationError.jsx';
import { login } from '../../utils/Api/MainApi.js';
import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';


function Login({ setUser }) {
  const email = useInput('', { isEmpty: null, isEmail: true });
  const password = useInput('', { isEmpty: null, minLength: 8, maxLength: 25 });
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setError(false);
    login({ email: email.value, password: password.value })
      .then((res) => {
        setUser(res);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err.status === 401) setError('Неверный Email или пароль');
      });
  };

  useEffect(() => {
    isLoggedIn && navigate('/movies');
  }, [isLoggedIn]);

  return (
    <>
      <Authorization error={error} onSubmit={handleSubmit} title="Рады видеть!" buttonValue="Войти"
        buttonIsActive={email.isValidInput && password.isValidInput} captionText="Ещё не зарегистрированы?"
        captionLink="Регистрация">
        <AuthorizationField onChange={email.onChange} onBlur={email.onBlur} isDirty={email.isDirty} value={email.value}
          title="E-mail" isValid={email.isValidInput} inputType="email" />
        {(email.isDirty && !email.isValidInput) && <ValidationError>{email.errorMessage()}</ValidationError>}
        <AuthorizationField onChange={password.onChange} onBlur={password.onBlur} isDirty={password.isDirty}
          value={password.value} title="Пароль" isValid={password.isValidInput} inputType="password" />
        {(password.isDirty && !password.isValidInput) && <ValidationError>{password.errorMessage()}</ValidationError>}
      </Authorization>
    </>
  );
}

export default Login;
