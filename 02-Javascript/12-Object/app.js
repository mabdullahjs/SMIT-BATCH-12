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

// const user = {
//     name: 'abdullah',
//     email: 'mabdullah@gmail.com',
//     hobbies: ['eating', 'sleeping', 'cooking'],
//     greetUser: function () {
//         console.log(`hello ${this.email}`);
//         return this.email

//     }
// }

// user.hobbies.push('updated')
// console.log(user.hobbies)
// user.greetUser()

// console.log(typeof this);

// const manager = {
//     fullName: 'Muhammad Abdullah Khan',
//     email: 'mabdullah2037@gmail.com',
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ["cricket" , 'eating' , 'sleeping'],
//     greetUser: function (){
//         return 'hello abdullah'
//     }
// }

// // manager.age = 20
// // manager.favFood = 'chicken biryani'
// // delete manager.greetUser

// console.log(manager.greetUser());

// console.log(this)

// const users = [{ user: "abdullah", age: 20 }, {user: 'usman' , age: 18}];
// console.log(users[0].user);

// const products = [
//     {
//         id: 1,
//         name: "Laptop",
//         price: 999.99,
//         category: "Electronics"
//     },
//     {
//         id: 2,
//         name: "Smartphone",
//         price: 699.99,
//         category: "Electronics"
//     },
//     {
//         id: 3,
//         name: "Coffee Maker",
//         price: 49.99,
//         category: "Home Appliances"
//     },
//     {
//         id: 4,
//         name: "Backpack",
//         price: 29.99,
//         category: "Accessories"
//     }
// ];

// console.log(products);

// const div = document.querySelector('.card');

// for(let i = 0 ; i < products.length; i++){
//     console.log(products[i].name);
//     div.innerHTML += `
//     <h1>${products[i].name}</h1>
//     <h1>${products[i].price}</h1>
//     <hr/>
//     `
// }

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 699.99,
    inStock: true,
  },
  {
    id: 3,
    name: "Tablet",
    category: "Electronics",
    price: 499.99,
    inStock: true,
  },
  {
    id: 4,
    name: "Smartwatch",
    category: "Electronics",
    price: 199.99,
    inStock: false,
  },
  {
    id: 5,
    name: "Headphones",
    category: "Accessories",
    price: 149.99,
    inStock: true,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Accessories",
    price: 79.99,
    inStock: true,
  },
  {
    id: 7,
    name: "Portable Charger",
    category: "Accessories",
    price: 29.99,
    inStock: true,
  },
  {
    id: 8,
    name: "Camera",
    category: "Electronics",
    price: 599.99,
    inStock: true,
  },
  {
    id: 9,
    name: "Drone",
    category: "Electronics",
    price: 299.99,
    inStock: false,
  },
  {
    id: 10,
    name: "Television",
    category: "Electronics",
    price: 799.99,
    inStock: true,
  },
  {
    id: 11,
    name: "Game Console",
    category: "Gaming",
    price: 499.99,
    inStock: true,
  },
  {
    id: 12,
    name: "Video Game",
    category: "Gaming",
    price: 59.99,
    inStock: true,
  },
  {
    id: 13,
    name: "Gaming Mouse",
    category: "Accessories",
    price: 49.99,
    inStock: true,
  },
  {
    id: 14,
    name: "Gaming Keyboard",
    category: "Accessories",
    price: 89.99,
    inStock: true,
  },
  {
    id: 15,
    name: "Monitor",
    category: "Electronics",
    price: 199.99,
    inStock: true,
  },
  {
    id: 16,
    name: "Printer",
    category: "Electronics",
    price: 149.99,
    inStock: true,
  },
  {
    id: 17,
    name: "Ink Cartridge",
    category: "Accessories",
    price: 29.99,
    inStock: false,
  },
  {
    id: 18,
    name: "Smart TV",
    category: "Electronics",
    price: 1299.99,
    inStock: true,
  },
  {
    id: 19,
    name: "Fitness Tracker",
    category: "Health",
    price: 99.99,
    inStock: true,
  },
  {
    id: 20,
    name: "Blender",
    category: "Home Appliances",
    price: 49.99,
    inStock: true,
  },
  {
    id: 21,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 79.99,
    inStock: true,
  },
  {
    id: 22,
    name: "Toaster",
    category: "Home Appliances",
    price: 29.99,
    inStock: true,
  },
  {
    id: 23,
    name: "Microwave Oven",
    category: "Home Appliances",
    price: 199.99,
    inStock: true,
  },
  {
    id: 24,
    name: "Air Fryer",
    category: "Home Appliances",
    price: 89.99,
    inStock: false,
  },
  {
    id: 25,
    name: "Refrigerator",
    category: "Home Appliances",
    price: 899.99,
    inStock: true,
  },
  {
    id: 26,
    name: "Washing Machine",
    category: "Home Appliances",
    price: 499.99,
    inStock: true,
  },
  {
    id: 27,
    name: "Vacuum Cleaner",
    category: "Home Appliances",
    price: 149.99,
    inStock: true,
  },
  {
    id: 28,
    name: "Desk Lamp",
    category: "Furniture",
    price: 39.99,
    inStock: true,
  },
  {
    id: 29,
    name: "Office Chair",
    category: "Furniture",
    price: 199.99,
    inStock: true,
  },
  {
    id: 30,
    name: "Dining Table",
    category: "Furniture",
    price: 399.99,
    inStock: false,
  },
  {
    id: 31,
    name: "Bookshelf",
    category: "Furniture",
    price: 149.99,
    inStock: true,
  },
  {
    id: 32,
    name: "Bed Frame",
    category: "Furniture",
    price: 299.99,
    inStock: true,
  },
  {
    id: 33,
    name: "Mattress",
    category: "Furniture",
    price: 499.99,
    inStock: true,
  },
  { id: 34, name: "Sofa", category: "Furniture", price: 699.99, inStock: true },
  {
    id: 35,
    name: "Curtains",
    category: "Home Decor",
    price: 49.99,
    inStock: true,
  },
  { id: 36, name: "Rug", category: "Home Decor", price: 89.99, inStock: true },
  {
    id: 37,
    name: "Wall Art",
    category: "Home Decor",
    price: 29.99,
    inStock: true,
  },
  { id: 38, name: "Vase", category: "Home Decor", price: 19.99, inStock: true },
  {
    id: 39,
    name: "Cushion",
    category: "Home Decor",
    price: 24.99,
    inStock: true,
  },
  {
    id: 40,
    name: "Mirror",
    category: "Home Decor",
    price: 79.99,
    inStock: true,
  },
];

const div = document.querySelector(".products");
console.log(products);

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  div.innerHTML += `
   <div class="card">
            <h3>Name: ${products[i].name}</h3>
            <h3>category: ${products[i].category}</h3>
            <h3>Price: ${products[i].price}</h3>
            <h3>In stock: ${products[i].inStock}</h3>
            <button>add to cart</button>
   </div>
    `;
}
