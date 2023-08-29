import { useEffect, useState } from 'react';

import style from './AuthorizationField.module.css';

function AuthorizationField({ title, inputType, onChange, onBlur, value, isValid, isDirty }) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isDirty) {
      isValid ? setIsError(false) : setIsError(true);
    }
  }, [isValid]);

  const handleBlur = () => {
    onBlur();
    isValid ? setIsError(false) : setIsError(true);
  };

  return (
    <>
      <label htmlFor={title} className={style.authorizationField__title}>{title}</label>
      <input id={title} onChange={onChange} onBlur={handleBlur} value={value}
        className={isError ? `${style.authorizationField__input} ${style.authorizationField__input_invalid}`
          : style.authorizationField__input} type={inputType || 'text'} />
    </>
  );
}

export default AuthorizationField;
