const getAge = (birthday: { year: number; month: number; day: number }) => {
  const today = new Date();
  const y = today.getFullYear() - birthday.year;
  const m = today.getMonth() - (birthday.month - 1);
  const d = today.getDate() - birthday.day;
  return y + (m < 0 || (m === 0 && d < 0) ? -1 : 0);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFunction: (o: any) => any = (name: string) => {
  switch (name) {
    case 'getAge':
      return getAge;
    default:
      throw Error('Unknown function');
  }
};

export default getFunction;
