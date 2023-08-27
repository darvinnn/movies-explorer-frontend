import { useEffect, useState } from 'react';

import { emailRegExp } from '../../constants/constants.js';

const useValidation = (value, validations) => {
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isEmail':
          value.match(emailRegExp) ? setIsEmailError(false) : setIsEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    (isEmailError || isEmpty || maxLengthError || minLengthError) ? setIsValidInput(false) : setIsValidInput(true);
  }, [isEmailError, isEmpty, maxLengthError, minLengthError]);

  const errorMessage = () => {
    if (isEmpty) return 'Поле не может быть пустым';
    if (minLengthError) return `Поле должно быть длиной не менее ${validations.minLength} символов`;
    if (maxLengthError) return `Поле должно быть длиной не более ${validations.maxLength} символов`;
    if (isEmailError) return 'Укажите правильный email';
  };

  return {
    isEmpty,
    isEmailError,
    minLengthError,
    maxLengthError,
    isValidInput,
    errorMessage,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDurty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => setValue(e.target.value);
  const onBlur = () => setIsDurty(true);

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export default useInput;
