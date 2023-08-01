// ES 2015 / ES6

class UserClass {
  email;
  userName;
  age;

  constructor(email, userName, age) {
    this.email = email;
    this.userName = userName;
    this.age = age;
  }

  greetings(name) {
    console.log(`Hola soy ${this.userName}, bienvenid@ ${name}`);
  }
}

UserClass.brand = 'ISDI';

const user1 = new UserClass('pepe@sample.com', 'pepe', 33);
const user2 = new UserClass('ernestina@sample.com', 'erni', 25);

user1.greetings(user2.userName);
user2.greetings(user1.userName);

user1.height = 180;
delete user2.age;

console.log(user1);
console.log(user2);

const a = [];
Array.isArray(a);

console.log(UserClass.brand);
console.log(user1.brand);
console.log(user1.constructor.brand);

class Alumno extends UserClass {
  email;
  userName;
  age;
  course;
  constructor(email, userName, age, course) {
    super(email, userName, age);
    this.course = course;
  }

  greetings(name, center) {
    super.greetings(name);
    console.log(`Estudio ${this.course} en ${center}`);
  }
}

const a1 = new Alumno('pepe@sample.com', 'pepe', 33, 'Angular');
console.log(a1);

a1.greetings('Luis', 'ISDI');
