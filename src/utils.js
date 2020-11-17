export const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const formatDuration = (duration) => {
  const date = new Date(0);
  date.setMinutes(duration);

  const formats = [];
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  if (day > 1) {
    formats.push(`${day - 1} д`);
  }

  if (hours) {
    formats.push(`${hours} ч`);
  }

  if (minutes) {
    formats.push(`${minutes} мин`);
  }

  return formats.join(' ');
};


