import { useEffect, useState } from 'react';

import Authorization from '../Authorization/Authorization.jsx';
import AuthorizationField from '../AuthorizationField/AuthorizationField.jsx';

import { emailRegExp } from '../../constants/constants.js';

function Login() {
  const useValidation = (value, validations) => {
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isEmail, setIsEmail] = useState(true);
    const [isValidInput, setIsValidInput] = useState(false);

    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
            break;
          case 'maxLength':
            value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
            break;
          case 'isEmpty':
            value ? setIsEmpty(false) : setIsEmpty(true);
            break;
          case 'isEmail':
            value.match(emailRegExp) ? setIsEmail(true) : setIsEmail(false);
            break;
        }
      }
    }, [value]);

    useEffect(() => {
      (!isEmail || isEmpty || maxLengthError || minLengthError) ? setIsValidInput(false) : setIsValidInput(true);
    }, [isEmail, isEmpty, maxLengthError, minLengthError]);

    return {
      isEmpty,
      isEmail,
      minLengthError,
      maxLengthError,
      isValidInput,
    };
  };

  const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDurty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => setValue(e.target.value);
    const onBlur = () => setIsDurty(true);

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid,
    };
  };

  const email = useInput('', { isEmpty: true, minLength: 4, isEmail: true, maxLength: 10 });
  const password = useInput('', { isEmpty: true, minLength: 6 });
  // console.log('email', email.isEmail);
  // console.log('valid', email.isValidInput);
  console.log([email.isEmail, email.maxLengthError, email.minLengthError, email.isValidInput]);
  return (
    <>
      <Authorization title="Рады видеть!" buttonValue="Войти" captionText="Ещё не зарегистрированы?" captionLink="Регистрация">
        {(email.isDirty && email.isEmpty) && <p>ERRORRRRRRRR</p>}
        {(email.value && email.minLengthError) && <p>minLength</p>}
        <AuthorizationField onChange={email.onChange} onBlur={email.onBlur} value={email.value} title="E-mail" inputType="email" />
        {(password.isDirty && password.isEmpty) && <p>ERRORRRRRRRR</p>}
        <AuthorizationField onChange={password.onChange} onBlur={password.onBlur} value={password.value} title="Пароль" inputType="password" />
      </Authorization>
    </>
  );
}

export default Login;
