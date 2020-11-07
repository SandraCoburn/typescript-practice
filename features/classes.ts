// by default all methods are public
class Vehicle {
  // color: string; //we can initialize the color here or delete it and add it in constructors
  //constructor(color: string) {
  constructor(public color: string) {
    // this.color = color; // ^ if we add public, we don't need to do this part
  }
  public drive(): void {
    console.log('this is a class');
  }
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle2 = new Vehicle('organge');
vehicle2.honk(); // we get an error because honk is protected in class, it cannot be used outside class or child class

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log(' this is a car class');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk(); // we can use a protected method in child class
  }
}

//an instance of a class:
const vehicle = new Vehicle('green');
vehicle.drive();
vehicle.honk();

const car = new Car(4, 'blue');
car.startDrivingProcess();
