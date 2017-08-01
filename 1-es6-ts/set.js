let fruits = new Set();
fruits.add('Apple');
fruits.add('Banana');
fruits.add('Guava');
fruits.add('Mango');
fruits.add('Guava');
// console.log(fruits);
// fruits.delete('Apple')
// console.log(fruits);

for(f of fruits) {
    console.log(f);
}