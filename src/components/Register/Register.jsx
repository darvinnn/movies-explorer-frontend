import Authorization from '../Authorization/Authorization.jsx';
import AuthorizationField from '../AuthorizationField/AuthorizationField.jsx';
import useInput from '../../utils/Validation/Validation.jsx';
import ValidationError from '../ValidationError/ValidationError.jsx';

function Register() {
  const name = useInput('', { isEmpty: null, minLength: 2 });
  const email = useInput('', { isEmpty: null, isEmail: true });
  const password = useInput('', { isEmpty: null, minLength: 8 });

  return (
    <>
      <Authorization title="Добро пожаловать!" buttonValue="Зарегистрироваться"
        buttonIsActive={email.isValidInput && password.isValidInput && name.isValidInput}
        captionText="Уже зарегистрированы?" captionLink="Войти">
        <AuthorizationField onChange={name.onChange} onBlur={name.onBlur} value={name.value} title="Имя" />
        {(name.isDirty && !name.isValidInput) && <ValidationError>{name.errorMessage()}</ValidationError>}
        <AuthorizationField onChange={email.onChange} onBlur={email.onBlur} value={email.value}
          title="E-mail" inputType="email" />
        {(email.isDirty && !email.isValidInput) && <ValidationError>{email.errorMessage()}</ValidationError>}
        <AuthorizationField onChange={password.onChange} onBlur={password.onBlur} value={password.value}
          title="Пароль" inputType="password" />
        {(password.isDirty && !password.isValidInput) && <ValidationError>{password.errorMessage()}</ValidationError>}
      </Authorization>
    </>
  );
}

export default Register;
