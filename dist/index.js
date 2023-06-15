"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_class_1 = __importDefault(require("./class/person.class"));
// const a: string = 'hehe';
// console.log(a);
const person = new person_class_1.default();
person.firstName = 'Loc';
person.lastName = 'Tran';
console.log(`${person.firstName} ${person.lastName}`);
person.setAge(24);
console.log(person.getAge());
