/* eslint-disable no-prototype-builtins */

/* eslint-disable no-proto */

const mammal = {
  brainy: true,
};

const human = {
  teeth: 32,
};

human.__proto__ = mammal;

const ernestina = {
  age: 25,
};

ernestina.__proto__ = human;

console.log(ernestina.age);
console.log(ernestina.teeth);
console.log(ernestina.brainy);

ernestina.teeth = 28;

console.log(ernestina.teeth);
console.log(ernestina.__proto__.teeth);
console.log(ernestina.hasOwnProperty('age'));
console.log(ernestina.hasOwnProperty('teeth'));
console.log(ernestina.hasOwnProperty('brainy'));

console.log(mammal.__proto__);
mammal.__proto__.tail = true;

const x = {};
console.log(x.tail);
