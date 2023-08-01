/* eslint-disable no-unused-vars */
// ReferenceError: Cannot access 'foo' before initialization
// console.log(foo);
// let foo;

const obj = {
  name: 'Pepe',
};

console.log(obj.age); // Undefined

console.log(obj.age?.first);

const obj2 = {};
const array = [4, 5, 6];

const text = 'pepe es mi amigo';

const upperText = text.toUpperCase();

const arrayText = text.split(' ');

console.log(text);
console.log(upperText);
console.log(arrayText);

console.log(array);
const arrayLength = array.push(10); // Mutable method
console.log('Hola, soy arrayLength:', arrayLength);
console.log(array);
const newArray = array.map((item) => item * item); // Inmutable method
console.log(array);
console.log(newArray);

function calculateLength(array) {
  return array.length;
}

// Push:
// Muta el array
// Añada el elemento al final
// Devuelve la longitud del array

function push(array, value) {
  array = [...array, value];
  return calculateLength(array);
}

const aNumbers = [2, 4, 6];
const r = push(aNumbers, 8);
console.log('Debería ser 4', r);
console.log('Debería ser [2,4,6,8]', aNumbers);
