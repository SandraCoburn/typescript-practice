import faker from 'faker';
import { Mappable } from './CustomMap';

// initialize inside the constructor
export class User implements Mappable {
  // implements Mappable to have every user satisfyes Mappable properties, it will give errors if not
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // use parseFloat to turn string into a number
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
