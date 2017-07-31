class Person {
    firstName;
    lastName;
    age;

    sayName() {
        console.log(`Hi! My name is ${this.firstName} ${this.lastName}`)
    }
}

let tim = new Person();
tim.firstName = 'Tim';
tim.lastName = 'Ferris';
tim.sayName();
