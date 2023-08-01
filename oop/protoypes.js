const human = {
  teeth: 32,
};

//
const ernestina = Object.create(human);

ernestina.age = 25;

const luisa = Object.assign(ernestina);
console.log('LUISA:', luisa);

console.log(Object.keys(ernestina)); // ['age']
console.log(Object.values(ernestina)); // [25]
console.log(Object.entries(ernestina)); // [ ['age', 25] ]

console.log(ernestina.age);
console.log(ernestina.teeth);
console.log(luisa.teeth);
