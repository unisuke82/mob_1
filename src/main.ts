export const main = () => {};

export const numberToString = (num: number) => {
  if (num % 3 === 0) {
    return "Fizz";
  }
  return num.toString();
};
