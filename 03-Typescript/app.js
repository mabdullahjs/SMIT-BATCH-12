// TS Compiler
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards
// type casting
// classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//-----Type Annotations-----//
// let username: string = "abdullah"
// username = " 20"
// let age: number = 20;
// age = 21
// let isLoggedIn: boolean = true;
// isLoggedIn = false
// let string:any = true
// let city:string = "karachi";
// city = 20
//----- Type Inference-----//
// let username = "abdullah"
// username = 20
// let isLoggedIn = true;
// isLoggedIn = "abc"
//----- Type Aliases & Union Types -----//
// type Abd = string | number
// // let username: Abd = "abdullah"
// // username = 20
// type fruits = (string | number) []
// type Fruit = (number | string)[]
// let fruit: Fruit = ["apple", "banana", "10", 20]
// type User = {
//     username: string;
//     fullname: string;
//     age: number;
//     isLoggedIn: boolean;
//     hobbies: string[];
//     abc?: string
// }
// const user: User = {
//     username: "mabdullah",
//     fullname: "Muhammad Abdullah",
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ['eating', 'sleeping', 'coding']
// }
// user.abc = "Abdullah"
// function greetUser(username: string, age: number): string {
//     return `your name is ${username} and your age is ${age}`
// }
// console.log(greetUser("Abdullah", 20));
// function hello(username: any): string {
//     console.log("hello world");
//     return `username is ${username}`
// }
// hello("abdullah")
// type User = {
//     username: string;
//     greetUser: () => string
//     hobbies?: (string | number)[]
// }
// const user: User = {
//     username: "abdullah",
//     greetUser: () => {
//         return `fjlkdf`
//     }
// }
// user.hobbies = ["abdullah" , true]
// let username: string | number = 12
// type Fruits = (string | number)[]
// let fruit: Fruits = ["apple", 20]
// const fruits:Fruits = ["apple" , "banana"]
// type User = {
//     username: string;
//     age: number;
//     hobbies?: string[];
//     isLoggedIn?: boolean;
//     greetUser?: () => void;
// }
// const user: User = {
//     username: "mabdullah",
//     age: 20,
// }
// // user.abc = "abdullah"
// user.greetUser = () => {
//     console.log("hello world");
// }
// user.greetUser()
// type Manager = User[]
// let firstMan: Manager = [
//     {
//         username: "abdullah",
//         age: 20
//     }
// ]
//-----Interfaces-----//
// interface User {
//     username: string;
//     age: number;
//     hobbies: string[];
//     isLoggedIn: boolean;
//     greetUser?: (username: string) => string;
// }
// const user: User = {
//     username: "mabdullah",
//     age: 20,
//     hobbies: ["eating"],
//     isLoggedIn: true
// }
// user.greetUser = (username: string): string => {
//     return `hello ${username}`
// }
// console.log(user.greetUser('abdullah'));
// const user = {
//     username: "mabdullah",
//     age: 20,
//     hobbies: ["eating"],
//     isLoggedIn: true
// }
//-----Type Aliases vs Interface-----//
// type User = {
//     name: string;
//     age: number
// }
// type User = { // wrong syntax
//     hobbies: []
// }
// interface User {
//     name: string;
//     age: number
// }
// interface User {
//     hobbies: string[]
// }
// const user: User = {
//     name: "abdullah",
//     age: 21,
//     hobbies: ['eating']
// }
// interface User {
//     username: string;
//     experience: number;
// }
// interface Manager extends User {
//     salery: number
// }
// const manager: Manager = {
//     username: "Muhammad Abdullah",
//     experience: 5,
//     salery: 500000
// }
// for (let i = 0; i < 100000; i++) {
//     console.log(i)
// }
// console.log("console after loop");
// let age: string = "25"
//-----Generics-----//
// function identity<T>(arg: T): T {
//   return arg;
// }
// identity("adasdas")
// function greetUser<T>(username: T): T {
//     return username
// }
// greetUser(true)
// function identityOne(val: string):string{
//     return val
// }
// function identityTwo(val: any): any {
//     return val
// }
// console.log(identityTwo(213));
// function identityThree<Type>(val: Type): Type {
//     return val
// }
// // identityThree(true)
// interface Car {
//     name: string;
//     brand: string;
// }
// identityThree<Car>({
//     name: "wagnor",
//     brand: "suzuki"
// })
//-----Enums-----//
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
// }
// console.log(CardinalDirections.East)
// enum User {
//     admin = "admin",
//     user = "user",
//     student = "student",
//     manager = "manager"
// }
// console.log(User.admin);
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
// }
// console.log(StatusCodes.NotFound)
//-----Tuples-----//
// let ourTuple: [number, boolean, string];
// ourTuple = [20, true, "Fdfsdf"]
// ourTuple.push("hello")
// let ourTuple: readonly [number, boolean, string];
// ourTuple = [20, true, "Fdfsdf"]
// ourTuple.push("hello")
// let ourTuple: [number, boolean, string];
// ourTuple = [false, 'Coding God was mistaken', 5];
// const ourReadonlyTuple: [number, boolean, string] = [5, true, 'The Real Coding God'];
//---------Type Guards-----------//
// function hello(str: string | number) {
//     if (typeof str === "string") {
//         console.log(str.toLowerCase());
//     }
// }
// hello("BFSDJFBHDFB");
// hello(324324);
// public
// private
// protected
var Car = /** @class */ (function () {
    function Car(n, p, b) {
        this.name = n;
        this.price = p;
        this.brand = b;
    }
    Car.prototype.checkCar = function () {
        return "car name is ".concat(this.name, " with price ").concat(this.price, " and manufacturer is ").concat(this.price);
    };
    return Car;
}());
var CarTax = /** @class */ (function (_super) {
    __extends(CarTax, _super);
    function CarTax(n, p, b, tax) {
        var _this = _super.call(this, n, p, b) || this;
        _this.tax = tax;
        return _this;
    }
    CarTax.prototype.calculateTax = function () {
        return "hello ".concat(this.price + this.tax);
    };
    return CarTax;
}(Car));
var wagnor = new CarTax("Wagnor", 2000000, "suzuki", 5000000);
console.log(wagnor.checkCar());
var mehran = new CarTax('Mehran', 200000, "suzuki", 1200000);
console.log(mehran.calculateTax());
// const arr: CarTax[] = []
// const arr: Array<CarTax> = []
// arr.push(mehran)
// arr.push(wagnor)
// console.log(arr);
