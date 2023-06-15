import Person from './class/person.class';
// const a: string = 'hehe';

// console.log(a);

const person = new Person();

person.firstName = 'Loc';
person.lastName = 'Tran';
console.log(`${person.firstName} ${person.lastName}`);

person.setAge(24)
console.log(person.getAge());
