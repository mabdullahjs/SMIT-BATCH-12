// Variable Scoping //c
// Closure 
// lexical scoping 
// Modules
// Object Methods (keys,values,freez,entries)
// Exponentiation Operator //c
// Optional chaining //c
// Destructuring  //c
// Template literals //c
// Destructuring 
// Default parameters //c 
// Rest parameter //c
// Spread Operator //c
// Arrow functions  //c
// Enhanced object literals  
// Iterators & For..of  //c
// Map  //c
// Array methods  //c
// Higher-order function //c  
// CallBack //c  
// Promises  //c
// Ternary Operator //c




// Ternary Operator 

// const age = 17;
// if (age > 18) {
//     console.log("you are able")
// }else if (age > 15) {
//     console.log("thora sa krskta ho");
// }else {
//     console.log("you are unable");
// }

// age > 18  ? console.log("you are able") : age > 15 ? console.log("thora sa krskta ho") : console.log("you are unable")


// Variable Scoping 


// global variable or local variable

// function hello (){
//     var a = 10;
// }

// console.log(a);



// functional Scope | block Scope


// if(true) {
//     var a = 10;
// }

// console.log(a);



// Spread Operator 

// const arr = [1, 2, 3];
// const arr2 = [5, 6, 7];

// const newArr = [...arr , ...arr2]
// console.log(newArr);



// const user = {
//     email: 'mabdullah@gmail.com',
//     age: 21
// }

// const newObj = {
//     username: 'mabdullah',
//     ...user 
// }

// console.log(newObj);



// Default parameters 
// Rest parameter 

// function hello (username = "usman"){
//     console.log(`hello ${username}`);

// }

// hello("abdullah")



// function usernames(...names){
//     console.log(names);

// }

// usernames('abdullah' , 'usman' , 'ammar' , 'affan')

// const bankBalance = 200000

// 1000000 > millionaire
// 500000 > road to million
// 1 -> 500000  Inshallah you will be millionaire


// const div = document.querySelector('.container');
// const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//     console.log(element);  
//     div.innerHTML += element + "<br/>" 
// }


// const obj = {
//     username: 'mabdullah',
//     age: 20,
//     email: 'mabdullah2037@gmail.com',
//     isLoggedIn: true
// }


// for (const key in obj) {
//    console.log(`${key}: ${obj[key]}`); 
// }




// Enhanced object literals  

// const username = "Muhammad Abdullah";
// const email = "mabdullah2037@gmail.com";
// const age = 21;


// const obj = {
//     username: username,
//     email,
//     age
// }

// const {username} = obj

// console.log(obj);



// Destructuring 

// const user = {
//     username: 'mabdullah',
//     fullname: 'Muhammad Abdullah',
//     email: 'mabdullah2037@gmail.com',
//     age: 21,
//     hobbies: ['cricket' , 'swimming' , 'eating'],
//     isLoggedIn: true,
// }

// let {username , age , email , hobbies} = user
// username = "usman"

// // console.log(obj.username)
// // console.log(obj['hobbies'])

// console.log(username);



// const adventurer = {
//     name: 'Alice',
//     cats: {
//         name: 'Dinah',
//         options: {
//             hobbies: 'sleeping'
//         }
//     },
// };

// console.log(adventurer.cats?.options?.hobbies);




// Exponential Operator

// console.log(5 ** 5);
// console.log(2 ** (3 ** 2));
// console.log(2 ** 9);


// 2 x 2 x 2 = 8
// 5x5x5x5x5 = 3125



// closures

function parentFunc(){
    console.log('parent function');
     function childrenFunc(){
        console.log('children function');  
    }

    return childrenFunc
}

const returnedVal = parentFunc()
console.log(returnedVal);
