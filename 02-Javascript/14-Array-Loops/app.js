// callback function
// higher order function

// map
// for each
// filter
// reduce
// arrow function

const fruits = ["apple", "grapes", "banana", "orange"];

// console.log(fruits)

// const ol = document.querySelector("#ordered-list");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
//     ol.innerHTML += `<li>${fruits[i]}</li>`
// }

// function hello(username){ // parameter receive krna
//     return `hello ${username}`
// }

// hello('abdullah') // argument pass krna

// kisi bhi function ka argument ma agar ma aik or function dedo, undar dena wala function ko callback function kehta hain.

// fruits.map(function (item , index, arr){
//     console.log(item , index , arr)
//     ol.innerHTML += `<li>${item}</li>`
// })

// const arr = fruits.forEach(function (item , index, arr){
//     console.log(item , index , arr)
//     ol.innerHTML += `<li>${item}</li>`

//     return item
// })

// console.log(arr)
// const arr = fruits.map(function (item , index, arr){
//     // console.log(item , index , arr)
//     ol.innerHTML += `<li>${item}</li>`

//     return item + " hello"
// })

// console.log(arr)

// const arr = fruits.map(function (item , index){
//     console.log(item)
//     return item + ' +'
// })

// console.log(arr);

const users = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 34 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 40 },
    { id: 5, name: "Eva", age: 26 },
    { id: 6, name: "Frank", age: 31 },
    { id: 7, name: "Grace", age: 29 },
    { id: 8, name: "Hank", age: 37 },
    { id: 9, name: "Ivy", age: 24 },
    { id: 10, name: "Jack", age: 33 },
];


// users.map(function (item){
//     console.log(item)
//     ol.innerHTML += `<li>${item.name}</li>`
// })

















// arrow function


// function greetUser(username){
//     console.log(`hello ${username}`);
// }

// const calledFunc = greetUser('usman')
// console.log(greetUser('abdullah'));














// function sum(num1 , num2){
//     console.log(num2);

// }


// sum(20)





// console.log("hello world!");



// arrow function

// const greeting = greetUser('abdullah');
// console.log(greeting)
// function greetUser(username){
//     return `hello ${username}`
// }




// greetUser()

// const greetUser = () => {
//     console.log("hello world")
// }


// const greetUser = (username) => `hello ${username}`

// let greetings = greetUser('abdullah')
// console.log(greetings);




// console.log(username);

// var username = "abdullah";



// const ol = document.querySelector('#ordered-list');

// const iteratedArr = users.forEach((item)=>{
//     console.log(item)
//     ol.innerHTML += `<li>${item.name}</li>`
//     return item.age + 10
// })

// console.log(iteratedArr)




// foreach vs map






// const num = [1, 5, 6, 7, 8, 3, 6, 9, 2];

// const filteredArr = num.filter(item => item < 5)
// console.log(filteredArr)







const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

