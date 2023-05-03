// let operator = '';

// function calculate() {
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       return num1 / num2;
//     default:
//       return 0;
//   }
// }

// num1 = parseFloat(prompt('Enter the first number:'));
// operator = prompt('Enter an operator (+, -, *, /):');
// num2 = parseFloat(prompt('Enter the second number:'));

// const result = calculate();
// alert(`${num1} ${operator} ${num2} = ${result}`);

const products = [
  {
    name: "twixx",
    info: "Lorem ipsum",
    price: 2000,
    img: "https://logos-world.net/wp-content/uploads/2023/03/Twix-Logo.jpg",
  },
  {
    name: "M&M",
    info: "Lorem ipsum",
    price: 10000,
    img: "https://static.independent.co.uk/2022/01/21/12/newFile.jpg",
  },
  {
    name: "Snickers",
    info: "Lorem ipsum",
    price: 4000,
    img: "data:image/png;base64,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",
  },
];

function PrintProducts() {
  const productsContainer = document.getElementById("products");
  let newDiv = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    console.log(`${product.name} - ${product.price}`);

    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <div class="candy" style="background-image: url(./img/img3.jpeg)">
            <div style="background-image: url('${product.img}')" class="img"></div>
            <div class="comp">
                <h1>${product.name}</h1>
                <p>${product.info}.</p>
                <p>${product.price}$</p>
                <button onclick="AddItem('${product.name}')">add</button>
                <button onclick="MinusItem('${product.name}')">minus</button>
            </div>
        </div>`;

    newDiv += div.outerHTML;
  }

  productsContainer.innerHTML = newDiv;
}
window.onload = PrintProducts;

const userbasket = [];

function AddItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity += 1;
  } else {
    userbasket.push({ name: itemName, quantity: 1 });
  }

  Basket();
}

function MinusItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity -= 1;

    if (userbasket[itemIndex].quantity === 0) {
      userbasket.splice(itemIndex, 1);
    }
  }

  Basket();
}

function Purchase() {
  let total = 0;
  for (let i = 0; i < userbasket.length; i++) {
    const { name, quantity } = userbasket[i];
    const product = products.find((p) => p.name === name);
    if (product) {
      total += product.price * quantity;
    }
  }

  document.getElementById("total").innerHTML = total + "$";
  Clear();
}

function Clear() {
  userbasket = [];
}

function Basket() {
  const basketDiv = document.getElementById("basket");
  const basketHtml = userbasket
    .map(
      ({ name, quantity }) => `
    <h1 class="price">${name} - ${quantity}</h1>
  `
    )
    .join("");
  basketDiv.innerHTML = basketHtml;
}
