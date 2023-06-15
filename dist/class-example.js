"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_class_1 = __importDefault(require("./class/person.class"));
const loc = new person_class_1.default();
console.log(loc.firstName);
console.log(loc.age);
console.log('hahaa');
