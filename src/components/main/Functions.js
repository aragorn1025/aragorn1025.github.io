function getAge(year, month, day) {
  const today = new Date();
  const birthday = new Date(year, month - 1, day);
  const y = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  const d = today.getDate() - birthday.getDate();
  return y + (m < 0 || (m === 0 && d < 0) ? -1 : 0);
}

function getFunction(name) {
  switch (name) {
    case 'getAge':
      return getAge;
    default:
      throw Error('Unknown function');
  }
}

export default getFunction;
