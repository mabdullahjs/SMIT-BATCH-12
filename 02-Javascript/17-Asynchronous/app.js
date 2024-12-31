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

console.log("hello world!");

// pending
// Fullfilled
// rejected

// .then
// .catch
// const num = 1;

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (num > 5) {
//       console.log("data received");
//       resolve();
//     } else {
//       console.log("nahi ayaa.");
//       reject();
//     }
//   }, 1000);
// });

// promise1
//   .then(() => {
//     console.log("resolve chal rha ha");
//   })
//   .catch(() => {
//     console.log("reject chal rha ha");
//   });

// console.log(promise1);

// const promise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (false) {
//       resolve("resolve chal rha ha");
//     } else {
//       reject("error occured");
//     }
//   }, 1000);
// });

// promise2
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function shaadiScnz(bankBalance, username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (bankBalance > 1000000) {
//         resolve(`shaadi mubarak hoo. 5000 do or niklo. ${username}`);
//       } else {
//         reject(`tumhara kuch nahi hoskta. Tum veela rho. ${username}`);
//       }
//     }, 2000);
//   });
// }

// shaadiScnz(2000000, "abdullah")
//   .then((res) => {
//     console.log(res);
//     return res + " returned from first .then";
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// shaadiScnz(2500000, "wajid usto")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function hello() {
//   const shaadiKrniHa = await shaadiScnz(2000000);
//   console.log(shaadiKrniHa);
// }

// hello();

// console.log("hello world!");

const div = document.querySelector(".container");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.products);
    res.products.map((item) => {
      div.innerHTML += `<div class="card">
            <img src=${item.thumbnail}
                alt="thumbnail">
            <h1>${item.title}</h1>
            <p>${item.description.slice(0, 20)}...</p>
            <p>Price: $${item.price}</p>
            <button onclick="showMore(${item.id})">See more</button>
        </div>`;
    });
  })
  .catch((err) => {
    console.log(err);
  });

const showMore = (id) => {
  console.log(id);
  localStorage.setItem("id", id);
  window.location = "singleProduct.html";
};
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

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then(console.log);
