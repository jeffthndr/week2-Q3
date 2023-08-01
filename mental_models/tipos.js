/* eslint-disable no-unused-vars */

// Valores, datos ...

// Tipos primitivos

console.log(98, typeof 98);
console.log('pepe', typeof 'pepe');
console.log(true, false, typeof true);
console.log(null, typeof null);
console.log(undefined, typeof undefined);

console.log(8n, typeof 8n);
console.log(Symbol(''), typeof Symbol(''));

// Tipos referenciados u Objetos

console.log({}, typeof {});
console.log([], typeof []);
console.log(/a/, typeof /a/);
console.log(new Date(), typeof new Date());

console.log(() => {}, typeof (() => {}));

// Variables

// caja - contenedor (espacio de memoria)
// etiqueta (puntero al espacio) - alambres (wires)

// sentencias (statements)

// expresiones (expressions)

const x = 33_000.67;
const d = 'pepe';

console.log(x);

// Object

console.log(x.toLocaleString());
console.log(d.toUpperCase());

console.log(d[0]);
// Error d[0] = 'k';
// Error d.age = 22;

const array = ['p', 'e', 'p', 'e'];
console.log(array[0]);
array[0] = 'k';
console.log(array);

const n = null;
// Error n.foo = 23;

const pet = 'Narval';
const w = pet;
