import style from './AuthorizationField.module.css';

function AuthorizationField({ title, inputType, onChange, onBlur, value }) {
  return (
    <>
      <p className={style.authorizationField__title}>{title}</p>
      <input onChange={onChange} onBlur={onBlur} value={value} className={style.authorizationField__input}
        type={inputType || 'text'} />
    </>
  );
}

export default AuthorizationField;
