import Authorization from '../Authorization/Authorization.jsx';

function Register() {
  return (
    <>
      <Authorization title="Добро пожаловать!" buttonValue="Зарегистрироваться" captionText="Уже зарегистрированы?" captionLink="Войти">
      </Authorization>
    </>
  );
}

export default Register;
