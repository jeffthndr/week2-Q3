/* eslint-disable object-shorthand */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
/* eslint-disable no-unused-vars */
{
  const obj1 = {};
  const obj2 = new Object();
  const aData1 = [];
  const aData2 = new Array();
  const date = new Date();
  const regExp = /a/i;
  const regExp2 = new RegExp();
  const err = new Error('Error de ...');

  // Math
  // JSON
}

// Functional Paradigm (Procedural / Structural)

{
  const x = {};

  const makeFoo = () => {};

  makeFoo(x);
}

// OOP -> Object Paradigm
// objetos { datos / metodos }

{
  const x = {
    makeFoo: () => {},
  };

  x.makeFoo();
}

const user1 = {
  email: 'pepe@sample.com',
  userName: 'pepe',
  age: 33,
  greetings: function (name) {
    console.log(`Hola soy ${this.userName}, bienvenid@ ${name}`);
  },
};

const user2 = {
  email: 'ernestina@sample.com',
  userName: 'erni',
  age: 25,
  greetings: function (name) {
    console.log(`Hola soy ${this.userName}, bienvenid@ ${name}`);
  },
};

user1.greetings(user2.userName);
user2.greetings(user1.userName);

user1.height = 180;
delete user2.age;

console.log(user1);
console.log(user2);
