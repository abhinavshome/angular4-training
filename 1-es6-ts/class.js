var Person = (function () {
    function Person() {
    }
    Person.prototype.sayName = function () {
        console.log("Hi! My name is " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var tim = new Person();
tim.firstName = 'Tim';
tim.lastName = 'Ferris';
tim.sayName();
