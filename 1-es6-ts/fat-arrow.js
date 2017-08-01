

var person = {
    name: 'Abhinav',
    sayHiAfter2Min: function() {
        setTimeout( () => {
            console.log(`hi, my name is ${this.name}`, this);
        }, 2000);
    }
}

person.sayHiAfter2Min();