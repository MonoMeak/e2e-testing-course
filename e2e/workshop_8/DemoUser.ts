export class DemoUser {
  private firstName: string;
  private age: string;
  private isStudent: boolean;
  constructor(firstName: string, age: string) {
    this.firstName = firstName;
    this.age = age;
    this.isStudent = true;
  }

  getFirstName() {
    return this.firstName;
  }
  getAget() {
    return this.age;
  }
  getIsStudent() {
    return this.isStudent;
  }
}
