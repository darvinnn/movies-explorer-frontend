import { useState } from 'react';

import style from './FilterCheckbox.module.css';

function FilterCheckbox() {
  const [onlyShortMeter, setOnlyShortMeter] = useState(true);
  const handleButtonClick = () => setOnlyShortMeter(prevValue => !prevValue);
  return (
    <div className={style.filterCheckbox}>
      <button className={`${style.filterCheckbox__button} ${onlyShortMeter && style.filterCheckbox__button_active}`} onClick={handleButtonClick} />
      <p className={style.filterCheckbox__text}>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
