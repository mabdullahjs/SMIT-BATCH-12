// console.log("hello world 1");
// console.log("hello world 2");
// console.log("hello world 3");
// setTimeout(() => {
//   console.log("hello world 4");
// }, 0);
// console.log("hello world 5");

// settimeout
// setinterval
// promises
// fetch
// async await
// axios

// const data = dabba ma sa data mangwaya
// console.log(data)

// const data = datamangwalo
// setTimeout(()=>{
//     console.log(data)
// } , 1000)

// function promise1(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 10) {
//         resolve("then chal rha ha");
//       } else {
//         reject("catch chal rha ha.");
//       }
//     }, 1000);
//   });
// }

// promise1(1)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally chal rha ha.");
//   });

// try {
//   aler("hello world!");
// } catch (error) {
//   console.error(error);
// }
// console.log("console after alert!");

// async function hello() {
//   try {
//     const result = await promise1(1);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// hello();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const div = document.querySelector(".container");
// const getData = async () => {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users");
//     const response = await data.json();

//     // render data

//     response.map((item) => {
//       div.innerHTML += `<h1>${item.name}</h1>`;
//     });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(console.log);
