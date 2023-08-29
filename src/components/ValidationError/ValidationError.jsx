import style from './ValidationError.module.css';

function ValidationError({ children }) {
  return (
    <p className={style.validationError}>{children}</p>
  );
}

export default ValidationError;
