// everytime you write a function add annotations to parameters
// we have inverence on return so you don't need to specify the return type if you don't want to
const add = (a: number, b: number): number => {
  return a + b;
};

// If you don't annotate the return TS won't give you errors if you forget the return
const substract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// If there is no return in function you annotate void as a type of return
const logger = (message: string): void => {
  console.log(message);
};

// If the execution of the function will stop before return you add never type
// when you don't expect to return anything ever
const throwError = (message: string): never => {
  throw new Error(message);
};

// If there is a chance that you will reach the end of a function you add void to return type
const throwError2 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (todaysWeather: { date: Date; weather: string }): void => {
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
};
// ES2015 how types work with destructuring
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};
