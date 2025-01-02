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
