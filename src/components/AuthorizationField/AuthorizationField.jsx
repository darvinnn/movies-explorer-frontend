import style from './AuthorizationField.module.css';

function AuthorizationField({ title, inputType }) {
  return (
    <>
      <p className={style.authorizationField__title}>{title}</p>
      <input className={style.authorizationField__input} type={inputType || 'text'} />
    </>
  );
}

export default AuthorizationField;
