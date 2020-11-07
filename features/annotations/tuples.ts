const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//adding types will make this array into a tuple because the order has to always be the same
const pepsi: [string, boolean, number] = ['brown', true, 40];

// type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
