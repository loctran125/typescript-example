//ex1
interface Dictionary {
  [key: string]: number;
}

const ages: Dictionary = {
  John: 30,
  Jane: 25,
  Sam: 35,
};

console.log(ages['John']); // Output: 30
console.log(ages['Jane']); // Output: 25
console.log(ages['Sam']); // Output: 35
//ex2
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}
const obj = new MyClass();
obj["property1"] = true;
obj["property2"] = (s: string) => s.length > 5;

console.log(obj.check("property1")); // Output: true
console.log(obj.check("property2")); // Output: (s: string) => s.length > 5
