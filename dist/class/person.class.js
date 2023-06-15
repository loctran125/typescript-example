"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
    }
    // Getter method for age
    getAge() {
        return this.age;
    }
    // Setter method for age
    setAge(age) {
        this.age = age;
    }
}
exports.default = Person;
