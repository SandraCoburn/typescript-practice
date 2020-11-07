import faker from 'faker';

// initialize inside the constructor
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // use parseFloat to turn string into a number
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
