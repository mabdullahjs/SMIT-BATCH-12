function greetUser() {
  console.log("hello Abdullah!");
}

// add event listner

// const h1 = document.querySelector("#head");
// h1.addEventListener("click", greetUser);

// const btn = document.querySelector("#btn");
// btn.addEventListener("mouseover", () => {
//   console.log("hello mouse over");
// });

// btn.addEventListener("mouseout", () => {
//   console.log("mouse out");
// });

// const image = document.querySelector("#image");

// const offBulb =
//   "https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png";

// const onBulb =
//   "https://i.pinimg.com/736x/cc/7b/58/cc7b58cbcd341a19a6545d947e48329b.jpg";
// image.addEventListener("mouseover", () => {
//   image.src = onBulb;
// });

// image.addEventListener("mouseout", () => {
//   image.src = offBulb;
// });

// const h1 = document.querySelector("h1");
// console.log(h1.innerHTML);

// const h1 = document.querySelector("#head");

// h1.addEventListener("click", (event) => {
//   console.log(event.target.innerHTML);
// });

// bubbling
// capturing

const ul = document.querySelector(".images");
const singleImg = document.querySelector("#image-3");

// ul.addEventListener("click", (event) => {
//   // 1 method
//   //   event.target.parentNode.remove();
//   //   2 method
//   if (event.target.parentNode.tagName === "LI") {
//     const removeItem = event.target.parentNode;
//     removeItem.parentNode.removeChild(removeItem);
//   } else {
//     console.log("bhai ul kaisa delete kro?");
//   }
//   // duplicate item
//   //   console.log(event.target.parentNode.outerHTML);
//   //   ul.innerHTML += event.target.parentNode.outerHTML;
// });

// singleImg.addEventListener("click", (event) => {
//   // parent event kaam nahi kraiga
//   //   event.stopPropagation();
//   console.log("image clicked");
// });

// const li = document.querySelector("#anchor");
// li.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("anchor clicked");
// });

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submit");
});

// add event listner
// event.preventDefault();
// event.stopPropagation();
// onsubmit
// onmouseover
// onmouseout
// outerhtml
// event {}
