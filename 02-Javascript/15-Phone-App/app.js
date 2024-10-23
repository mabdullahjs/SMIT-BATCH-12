const phones = [
  {
    brand: "Samsung",
    model: "Galaxy S21",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 799,
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    ram: 4,
    rom: 128,
    camera: "12 megapixel",
    price: 799,
  },
  {
    brand: "OnePlus",
    model: "9",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 729,
  },
  {
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 128,
    camera: "50 megapixel",
    price: 599,
  },
  {
    brand: "Xiaomi",
    model: "Mi 11",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 749,
  },
  {
    brand: "Sony",
    model: "Xperia 1 III",
    ram: 12,
    rom: 256,
    camera: "12 megapixel",
    price: 1299,
  },
  {
    brand: "Oppo",
    model: "Find X3 Pro",
    ram: 12,
    rom: 256,
    camera: "50 megapixel",
    price: 1149,
  },
  {
    brand: "Vivo",
    model: "X60 Pro",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 999,
  },
  {
    brand: "Nokia",
    model: "G50",
    ram: 4,
    rom: 128,
    camera: "48 megapixel",
    price: 299,
  },
  {
    brand: "Motorola",
    model: "Edge 20",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 599,
  },
  {
    brand: "Realme",
    model: "GT",
    ram: 12,
    rom: 256,
    camera: "64 megapixel",
    price: 499,
  },
  {
    brand: "Asus",
    model: "ROG Phone 5",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "HTC",
    model: "Desire 21 Pro",
    ram: 8,
    rom: 128,
    camera: "48 megapixel",
    price: 399,
  },
  {
    brand: "Huawei",
    model: "P40 Pro",
    ram: 8,
    rom: 256,
    camera: "50 megapixel",
    price: 899,
  },
  {
    brand: "LG",
    model: "Wing",
    ram: 8,
    rom: 256,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "ZTE",
    model: "Axon 20",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 399,
  },
  {
    brand: "BlackBerry",
    model: "KEY2",
    ram: 6,
    rom: 64,
    camera: "12 megapixel",
    price: 649,
  },
  {
    brand: "Lenovo",
    model: "Legion Phone Duel",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "Alcatel",
    model: "3L",
    ram: 4,
    rom: 64,
    camera: "48 megapixel",
    price: 199,
  },
  {
    brand: "TCL",
    model: "10 Pro",
    ram: 6,
    rom: 128,
    camera: "64 megapixel",
    price: 449,
  },
];

const div = document.querySelector("#container");

const cartItems = [];

phones.map((item, index) => {
  div.innerHTML += `
  <div class="cards border border-white p-5 rounded w-25">
            <h1>Model ${item.brand} ${item.model}</h1>
            <h1>price $${item.price}</h1>
            <button class="btn btn-primary mt-3" onclick="addToCart(${index})">Add to Cart</button>
  </div>
  `;
});

function addToCart(index) {
  const checkIndex = cartItems.indexOf(phones[index]);
  if (checkIndex === -1) {
    phones[index].quantity = 1;
    cartItems.push(phones[index]);
  } else {
    cartItems[checkIndex].quantity += 1;
  }
  console.log(cartItems);
}

function checkout() {
  console.log("checkout");
  window.location = "cart.html";
}
