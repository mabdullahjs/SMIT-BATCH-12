// console.log("hello world!");

// var
// let
// const


// console.log(username);

// var redeclare or reassign

// var username = "abdullah"
// var username = 'usman'
// console.log(username);


// let sirf reassign krna deta ha

// let city = 'karachi'
// // let city = 'pindi' // redeclare nahi krskta
// city = 'lahore'
// console.log(city);




// const dono nahi krna deta ha

// const username = 'abdullah'
// username = 'usman'
// console.log(username);


// let username;
// username = 'abdullah'



// const city = 'karachi'



// const arr = ['abc', 'def']
// arr.push('push')
// console.log(arr);




// const fruits = ['banana', 'orange', 'apple']
// console.log(fruits[0]);



// object


// collection of key and value is called object

// const obj = {
//     username: 'abdullah',
//     age: 20,
//     email: 'mabdullah2037@gmail.com',
//     isLoggedIn: true,
// }
// // console.log(obj["username"]);
// obj.username = 'usman'
// obj.rollNumber = 2342432
// delete obj.age
// console.log(obj);














// var hello = function () {
//     console.log('hello world');

// }

// hello()


const user = {
    name: 'abdullah',
    email: 'mabdullah@gmail.com',
    hobbies: ['eating', 'sleeping', 'cooking'],
    greetUser: function () {
        console.log(`hello ${this.email}`);
        return this.email

    }
}

// user.hobbies.push('updated')
// console.log(user.hobbies)
// user.greetUser()

console.log(typeof this);
















