export default class Person {
  firstName: string = '';
  lastName: string = '';
  private age: number = 0;

  // Getter method for age
  getAge(): number {
    return this.age;
  }

  // Setter method for age
  setAge(age: number): void {
    this.age = age;
  }
}
