// TS Compiler P
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


type User = {
    username: string;
    greetUser: () => string
    hobbies?: (string | number)[]
}


const user: User = {
    username: "abdullah",
    greetUser: () => {
        return `fjlkdf`
    }
}

user.hobbies = ["abdullah" , true]