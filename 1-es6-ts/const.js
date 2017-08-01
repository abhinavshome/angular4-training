"use strict";

const person = Object.freeze({
    name: 'Abhinav'
});

person.name = 'Ramesh';

console.log(person);