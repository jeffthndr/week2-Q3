/* eslint-disable no-unused-vars */

foo(); // Ejemplo de Hoisting
// Error bar();
// Error arrow();

// Declaración

function foo() {
  // Implementación
  console.log('Soy foo');
}

// Asignación de un function expression (= función anónima)

const bar = function () {
  // Implementación
};

const arrow = () => {
  // Implementación
};

// Parámetros v. Argumentos
// foo(...argumentos) ===> VALORES
// const foo = (parámetros) => {} ===> VARIABLES

const add = (x, y) => {
  const r = x + y;
  return r;
};

const x = 5;
console.log('Add', add(x));
console.log('Add', add(x, 4));
console.log('Add', add(x, 4, 8));

const countDwarves = function () {
  return 7;
};

const dwarves = countDwarves;
console.log(dwarves);

console.log(countDwarves());
console.log(dwarves());
