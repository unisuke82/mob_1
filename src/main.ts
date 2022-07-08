export const main = () => {};

export const numberToString = (num: number) => {
  const isFizz = num % 3 === 0;
  const isBuzz = num % 5 === 0;

  if (isFizz && isBuzz) {
    return "FizzBuzz"
  }
  if (isFizz) {
    return "Fizz";
  }
  if (isBuzz) {
    return "Buzz";
  }
  return num.toString();
};
