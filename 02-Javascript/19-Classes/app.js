// console.log("hello world!");

// OOPS
// Object oriented progamming
// prototypical language
// ES6 classes behind the scene protype syntactic sugar


// Object literal

// const user = {
//     fullname: 'Muhammad Abdullah',
//     age: 21
// }

// console.log(user);







// Constructor Function


// function Vehicle(name, manufacturer, price) {
//     this.carName = name;
//     this.manufacturer = manufacturer;
//     this.price = price
// }

// const myCar = new Vehicle("wagnor", "suzuki", 2000000);
// const javedCar = new Vehicle("corolla", "toyota", 5000000);
// // console.log(myCar);
// // console.log(javedCar);


// Vehicle.prototype.myFunc = function (){
//     return `this is my car ${this.carName}`
// }


// console.log(javedCar.myFunc());
// console.log(myCar.myFunc());

// Array.prototype.myPersonalFunc = function (){
//     return `this is my personal function ${this}`
// }

// const arr = [1, 2, 3]
// console.log(arr.myPersonalFunc());




// Classes

// constructor
// prototype
// static method

// class Car {
//     constructor (name , manufacturer){
//         console.log("constructor function called");
//         this.name = name;
//         this.manufacturer = manufacturer
//     }

//     method (){
//         return `this is my method and my car manufacturer is ${this.manufacturer}`
//     }


// }

// class Vehicle extends Car {
//     info (){
//         return `this is my car ${this.name} with manufacturer ${this.manufacturer}`
//     }
// }

// const myCar = new Vehicle('wagnor' , 'suzuki')
// console.log(myCar.info());
// console.log(myCar.method());



// OOPS
// Encapsulation, Abstraction, Polymorphism, Inheritance

// Encapsulation restrict direct access to data object
// Inheritance get properties of other classes
// Polymorphism something that have more than one form
// Abstraction hiding internal details and describing things in simple terms



// Encapsulation

// class BankAccount {
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount
//         return `your account has been credited with ${amount}`
//     }

//     accountBalance() {
//         return `your account balance is Rs:${this.#balance}`
//     }
// }


// const myAccount = new BankAccount()
// console.log(myAccount.deposit(200000));
// console.log(myAccount.deposit(10000));
// console.log(myAccount.accountBalance());




// Polymorphism

// class Bird {
//     fly() {
//         return `birds can fly`
//     }

//     method() {
//         return `this is a bird method`
//     }
// }

// class Penguin extends Bird {
//     fly() {
//         return `Penguin can't fly`
//     }
// }

// const myPenguin = new Penguin();
// console.log(myPenguin.fly());




// Abstraction

// class CoffeeMaker {
//     constructor() {
//         console.log("constructor ");
//     }

//     makeCoffee() {
//         // complex calculation regarding
//         return `coffee is ready now take your coffee`
//     }

//     giveCoffe() {
//         // complex calculation
//         return `here is your coffee`
//     }

// }

// const myCoffee = new CoffeeMaker()
// console.log(myCoffee.makeCoffee());
// console.log(myCoffee.giveCoffe());



// classes
// constructor
// protype
// static


// class Bird {
//     constructor(name) {
//         this.name = name;
//         console.log('constructor function');
//     }

//     method() {
//         return (`this is a prototype method ${this.name}`);

//     }

//     static specialMethod() {
//         return `this is a special method`
//     }
// }

// // const pigeon = new Bird("pigeon")
// // console.log(pigeon.method());

// console.log(Bird.specialMethod());





// Local storage
// regex
// closure

