import Authorization from '../Authorization/Authorization.jsx';
import AuthorizationField from '../AuthorizationField/AuthorizationField.jsx';
import useInput from '../../utils/Validation/Validation.jsx';
import ValidationError from '../ValidationError/ValidationError.jsx';


function Login() {
  const email = useInput('', { isEmpty: null, isEmail: true });
  const password = useInput('', { isEmpty: null, minLength: 8 });

  return (
    <>
      <Authorization title="Рады видеть!" buttonValue="Войти"
        buttonIsActive={email.isValidInput && password.isValidInput} captionText="Ещё не зарегистрированы?"
        captionLink="Регистрация">
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

export default Login;
