const capitalize = (text: string) => {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
};

const getDateString = (date: Date) => {
  const m = `0${date.getUTCMonth() + 1}`.slice(-2);
  const d = `0${date.getUTCDate()}`.slice(-2);
  const y = date.getUTCFullYear();
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

interface LastUpdatedTime {
  year: number;
  month: number;
  day: number;
  hour: number;
}

const getLastUpdatedTime = ({ year, month, day, hour }: LastUpdatedTime): string => {
  const utcTimestamp = Date.UTC(year, month - 1, day, hour, 0, 0);
  const date = new Date(utcTimestamp);
  return `Last updated at ${getDateString(date)} (${getDayDiffString(date)} ago).`;
};

export { capitalize, getDateString, getDayDiffString, getLastUpdatedTime, type LastUpdatedTime };
