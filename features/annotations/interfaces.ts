//We create an interface so this can be reused all over the application
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};
// without the interface
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};
printVehicle(oldCivic);

// Using the interface
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

// Rehusable code using generic looking functions, we can use the reportable interface in both objects
const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};
printVehicle2(oldCivic);
printSummary(oldCivic);
printSummary(drinks);
