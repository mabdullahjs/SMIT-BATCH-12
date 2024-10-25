console.log("hello cart");

const data = localStorage.getItem("cart");
const convert = JSON.parse(data);
console.log(convert);

let output = document.querySelector("#output");

convert.map((item) => {
  output.innerHTML += `<h1>${item.brand}</h1>`;
});
