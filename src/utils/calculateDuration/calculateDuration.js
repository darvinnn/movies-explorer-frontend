const calculateDuration = (totalMinutes) => {
  const hours = Math.trunc(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (!hours) return spellMinutes(minutes);
  if (hours === 1) return `1 час ${spellMinutes(minutes)}`;
  if (hours >= 1 && hours <= 4) return `${hours} часа ${spellMinutes(minutes)}`;
  if (hours > 4) return 'Более 4 часов';
};

const spellMinutes = (minutes) => {
  if (!minutes) return '';
  const lastDigit = minutes % 10;
  const lastTwoDigits = minutes % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${minutes} минут`;
  if (lastDigit === 1) return `${minutes} минута`;
  if (lastDigit >= 2 && lastDigit <= 4) return `${minutes} минуты`;
  return `${minutes} минут`;
};

export default calculateDuration;
