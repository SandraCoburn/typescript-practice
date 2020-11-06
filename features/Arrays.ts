//type inference
const carMakers = ['ford', 'toyota', 'chevy'];

// if you want to be specific
const carMakers2: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// nested arrays
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
