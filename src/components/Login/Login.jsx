import Authorization from '../Authorization/Authorization.jsx';
import AuthorizationField from '../AuthorizationField/AuthorizationField.jsx';

function Login() {
  return (
    <>
      <Authorization title="Рады видеть!" buttonValue="Войти" captionText="Ещё не зарегистрированы?" captionLink="Регистрация">
        <AuthorizationField title="E-mail" inputType="email" />
        <AuthorizationField title="Пароль" inputType="password" />
      </Authorization>
    </>
  );
}

export default Login;
