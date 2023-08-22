import Authorization from '../Authorization/Authorization.jsx';
import AuthorizationField from '../AuthorizationField/AuthorizationField.jsx';

function Register() {
  return (
    <>
      <Authorization title="Добро пожаловать!" buttonValue="Зарегистрироваться" captionText="Уже зарегистрированы?" captionLink="Войти">
        <AuthorizationField title='Имя' />
        <AuthorizationField title="E-mail" inputType="email" />
        <AuthorizationField title="Пароль" inputType="password" />
      </Authorization>
    </>
  );
}

export default Register;
