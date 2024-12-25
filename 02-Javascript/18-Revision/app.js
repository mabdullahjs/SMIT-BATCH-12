// // console.log('hello world!');


// // fetch('https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=karachi&aqi=no')
// // .then(res => res.json())
// // .then(res => console.log(res))
// // .catch(err => console.log(err))



// // localstorage
// // regex
// // closures
// // filter

// // const fruits = ['apple', 'orange', 'banana'];

// // const convertFruitArray = JSON.stringify(fruits)
// // localStorage.setItem('fruits', convertFruitArray)


// // const user = {
// //     name: 'John Doe',
// //     age: 30,
// //     email: 'john.doe@example.com'
// // };



// // localStorage.setItem('user', JSON.stringify(user))




// // regex

// // const form = document.querySelector("#form");
// // const email = document.querySelector("#email");
// // const password = document.querySelector("#password");

// // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // const cnic = /^\d{5}-\d{7}-\d$/
// // const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.{8,15}$).*/

// // form.addEventListener("submit", (event) => {
// //     event.preventDefault()
// //     // console.log(cnic.test("42101-6776785-26"));
// //     if (emailRegex.test(email.value)) {
// //         console.log(email.value);
// //         console.log(password.value);

// //         return
// //     }

// //     console.log("email sahi nahi ha")
// // })



// const users = [
//     { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
//     { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
//     { name: 'Alice Johnson', age: 28, email: 'alice.johnson@example.com' },
//     { name: 'Bob Brown', age: 32, email: 'bob.brown@example.com' },
//     { name: 'Charlie Davis', age: 22, email: 'charlie.davis@example.com' },
//     { name: 'Diana Evans', age: 27, email: 'diana.evans@example.com' },
//     { name: 'Ethan Foster', age: 29, email: 'ethan.foster@example.com' },
//     { name: 'Fiona Green', age: 31, email: 'fiona.green@example.com' },
//     { name: 'George Harris', age: 24, email: 'george.harris@example.com' },
//     { name: 'Hannah Ivers', age: 26, email: 'hannah.ivers@example.com' }
// ];

// // higher order function
// // call back
// const filteredUser = users.filter((item) => {
//     return item.age > 30
// })

// console.log(filteredUser);





const div = document.querySelector('.container');



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        json.map(item => {
            div.innerHTML += `
            <div>
            <p>Name: ${item.name}</p>
            <button class="btn">submit</button>
            </div>
            <br/>`
        })

        const btn = document.querySelectorAll('.btn');
        console.log(btn);
        btn.forEach(item => {
            item.addEventListener('click', greetUser)
        })
    })





function greetUser() {
    console.log("greet User");

}















