function User(email, userName, age) {
  this.email = email;
  this.userName = userName;
  this.age = age;
}

User.brand = 'ISDI';

User.prototype.greetings = function (name) {
  console.log(`Hola soy ${this.userName}, bienvenid@ ${name}`);
};

// Operador new
// - crea un objeto
// - su __proto__ es el prototype de la constructora
// - su constructor es la constructora

const user1 = new User('pepe@sample.com', 'pepe', 33);
const user2 = new User('ernestina@sample.com', 'erni', 25);

user1.greetings(user2.userName);
user2.greetings(user1.userName);

user1.height = 180;
delete user2.age;

console.log(user1);
console.log(user2);

const a = [];
Array.isArray(a);

console.log(User.brand);
console.log(user1.brand);
console.log(user1.constructor.brand);
