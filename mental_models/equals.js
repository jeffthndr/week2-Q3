/* eslint-disable no-useless-concat */
/* eslint-disable no-self-compare */
/* eslint-disable no-compare-neg-zero */
/* eslint-disable use-isnan */
/* eslint-disable capitalized-comments */

console.log(Object.is(3, 3));
console.log(Object.is(3, -3));
console.log(Object.is({}, {}));
console.log(Object.is(Infinity, Infinity));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));
console.log(Object.is('', ''));
console.log(Object.is(0, null));
console.log(Object.is(null, null));
console.log(Object.is(undefined, undefined));

console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(Object.is(0, -0)); // false
console.log(0 === -0); // true

Number.isNaN(); // NO hace casting
isNaN(); // Hace casting

console.log(50 / '2');
console.log('Hola ' + 'amigo');
console.log((50 + '2') * 2); // 1004

console.log(isNaN('pepe')); // true
console.log(Number.isNaN('pepe')); // false

// String => Number
// Number => string

// ?? => Boolean

// Falsy

// false

// undefined
// null
// 0
// -0
// 0n
// NaN
// ''

// Truthy

// []
// {}
// 'false'

// todo lo demás
