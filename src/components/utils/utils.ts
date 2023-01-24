/* eslint-disable-next-line no-extend-native */
Object.defineProperty(String.prototype, 'toCapitalize', {
  value() {
    return this.substring(0, 1).toUpperCase() + this.substring(1).toLowerCase();
  },
  enumerable: false,
});

const getDateString = (date: Date) => {
  const m = `0${date.getMonth() + 1}`.slice(-2);
  const d = `0${date.getDate()}`.slice(-2);
  const y = date.getFullYear();
  return `${m}-${d}-${y}`;
};

const getDayDiffString = (date: Date) => {
  const today = new Date();
  let diff = today.getTime() - date.getTime();
  if (diff <= 0) {
    diff = 0;
  }
  diff = Math.floor(diff / 1000 / 60 / 60);
  if (diff < 24) {
    return `${diff} hour${diff <= 1 ? '' : 's'}`;
  }
  diff = Math.floor(diff / 24);
  if (diff < 7) {
    return `${diff} day${diff <= 1 ? '' : 's'}`;
  }
  if (diff < 30) {
    diff = Math.floor(diff / 7);
    return `${diff} week${diff <= 1 ? '' : 's'}`;
  }
  if (diff < 365) {
    diff = Math.floor(diff / 30);
    return `${diff} month${diff <= 1 ? '' : 's'}`;
  }
  diff = Math.floor(diff / 365);
  return `${diff} year${diff <= 1 ? '' : 's'}`;
};

const getLastUpdatedString = (year: number, month: number, day: number, hour: number) => {
  const date = new Date(year, month - 1, day, hour, 0, 0);
  return `Last updated at ${getDateString(date)} (${getDayDiffString(date)} ago).`;
};

export { getDateString, getDayDiffString, getLastUpdatedString };
