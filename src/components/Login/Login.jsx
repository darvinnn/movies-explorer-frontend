import Authorization from '../Authorization/Authorization.jsx';

function Login() {
  return (
    <>
      <Authorization title="Рады видеть!" buttonValue="Войти" captionText="Ещё не зарегистрированы?" captionLink="Регистрация">
      </Authorization>
    </>
  );
}

export default Login;
