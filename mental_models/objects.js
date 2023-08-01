const president = {
  name: 'Pooh',
  next: null,
};

president.next = president;

console.log(president);

const foo = (value) => {
  const newValue = { ...value };
  // Alt const newValue = JSON.parse(JSON.stringify(value))
  newValue.name = 'Vengo de foo';
  console.log('New', newValue);
};

const obj = {
  name: 'Soy obj',
};

console.log(obj.name);
foo(obj);
console.log(obj.name);

// Usos de JSON
// JSON.parse('{ "name": "Pepe"}') // {name: 'Pepe'}
// JSON.stringify({name: 'Pepe'} ) // '{ "name": "Pepe"}'

const obj2 = Object.freeze(obj);
obj2.name = '';
