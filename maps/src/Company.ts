import faker from 'faker';

export class Company {
  copanyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'red';
  constructor() {
    this.copanyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.copanyName}</h1> <h3> CatchPhrase: ${this.catchPhrase}</h3>
    </div>`;
  }
}
