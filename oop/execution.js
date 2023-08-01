/* eslint-disable new-cap */
/* eslint-disable no-new */
/* eslint-disable object-shorthand */
// Patrones de ejecución

// Creación, declaración, asignación

const foo = function () {
  console.log('Soy foo');
  console.log(this);
};

// Patron function

foo();

// Patron method

const obj = {
  foo: foo,
  name: 'obj',
};

obj.foo();

// Patron constructor

new foo();

// Patron apply

const obj2 = {
  name: 'obj2',
};

foo.apply(obj2);
