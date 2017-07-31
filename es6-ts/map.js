let person = new Map([
    ['name', 'Abhinav'],
    ['age', 31]
]);
console.log(person);
person.set('age', 32);
console.log(person);
console.log(person.has('age'));

for([key, value] of person.entries()) {
    console.log(key, value);
}