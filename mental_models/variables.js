// Variables
const x = 33000.67;
const d = 'pepe';
// Tipos primitivos:
console.log(x);
console.log(98, typeof 98);
console.log(true, typeof 'pepe');
console.log(false, typeof true);
console.log(null);
console.log(undefined, typeof undefined);
console.log(8n, typeof 8n);
console.log(Symbol(''), typeof Symbol(''));

// Tipos referenciados u objetos:
console.log({}, typeof {});
console.log([], typeof []);
console.log(/a/, typeof /a/);
console.log(new Date(), typeof new Date());
console.log(() => {}, typeof (() => {}));

// O bjects:

console.log(x.toLocaleString());
console.log(d.toUpperCase());
