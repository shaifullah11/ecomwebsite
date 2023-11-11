const shopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const total = document.querySelector('.total');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('body');
const noOfItems = document.querySelector('.NoOfItems')
const products = [
  {
    id: 1,
    name: "Wooden Box",
    image: "16.jpg",
    offerPrice: 49,
    price: 39,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 2,
    name: "Trellis Pillow",
    image: "17.jpg",
    price: 35,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 3,
    name: "Blue Pillow",
    image: "15.jpg",
    price: 19,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 4,
    name: "Sieve",
    image: "12.jpg",
    price: 29,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 5,
    name: "Dinner Table",
    image: "11.jpg",
    price: 149,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 6,
    name: "Kitchen Wooden Table",
    image: "10.jpg",
    offerPrice: 99,
    price: 39,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 7,
    name: "Product Name",
    image: "9.jpg",
    price: 39,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 8,
    name: "Product Name",
    image: "8.jpg",
    price: 49,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 9,
    name: "Product Name",
    image: "7.jpg",
    price: 49,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  },
  {
    id: 10,
    name: "Drawer",
    image: "6.jpg",
    price: 199,
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  }
];

const listCards = [];
const changeQuantity = (key) => {
  const inputElement = document.getElementById(`quantity-${key}`);
  const newQuantity = parseInt(inputElement.value, 10);

  if (!isNaN(newQuantity) && newQuantity >= 0) {
    listCards[key].quantity = newQuantity;
    reloadCard();
  }
}
function addToCard(key) {
  console.log(listCards[key])
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
    console.log(listCards[key].quantity)
  }
  else{
    listCards[key].quantity += 1;
  }
  reloadCard();
}
const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.quantity*value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      <div class ="listCard-left">
        <p class=""> ${value.name} </p>
        <div class = "listCard-left-price">$${value.price}.00</div>

        <div class = "listCard-left-quantity">QTY:  <input value = "${value.quantity}" type = "text" id = "quantity"><label for="quantity-${key}"><i onclick="changeQuantity(${key})" style ="color:#000;" class="fa-solid fa-pen"></i></label>
        </div>
      </div>
      <div>
      <div class = "listCard-right"><img src= "images/${value.image}"><div class="closeShopping" onclick ="deleteItems(${key})" >x</div></div>
      </div>
      `
      listCard.appendChild(newDiv)
    }
    noOfItems.innerHTML = value.quantity
    total.innerHTML = `$${totalPrice}.00`;
    quantity.innerHTML = count;
    if (count > 1) {
      noOfItems.innerHTML = `${count} ITEMS`
    }
    else {
      noOfItems.innerHTML = `${count} ITEM`
    }
  })
}
const deleteItems = (key) => {
  delete listCards[key]
  reloadCard()
}

// const changeQuantity = (key, value) => {
//   console.log(key,value)
  // if (quantity == 0) {
  //   delete listCards[key]
  // }
  // else {
  //   listCards[key].quantity = quantity;
  //   listCards[price] = quantity * products[key].price
  // }
// }


// shopping.addEventListener('click', () => {
//   body.classList.add('active');
// });

const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    let priceHTML = '';

    let button = `<button class="fa fa-shopping-cart btn-1" onclick="addToCard(${key})"><span
          style="font-family: Poppins;">&nbsp;&nbsp;ADD TO CART</span></button>`;

    if (value.offerPrice) {
      priceHTML = `
              <strong class="price">
                <span style="text-decoration: line-through; color: #9d9e9f; font-size: medium;">$${value.offerPrice}.00</span> $${value.price}.00
              </strong>
            `;
    } else {
      priceHTML = `
              <strong class="price">
                $${value.price}.00
              </strong>
            `;
    }

    newDiv.innerHTML = `
            <div class="shop-main-content-items-detail-item">
              <div class="shop-main-content-items-detail-item-img">
                <img src="images/${value.image}" alt="">
              </div>
              <div class="shop-main-content-items-detail-desp">
                <p class="shop-main-content-items-detail-desp-title">${value.name}</p>
                <p class="shop-main-content-items-detail-desp-details">${value.description}   
                  <span><button>Learn More</button></span>
                </p>
                ${priceHTML}

                <div class="shop-main-content-items-detail-cardbtn">
                  ${button}
                  <button class="btn-2"> <a class="fa-regular fa-heart"></a></button>
                  <button class="btn-3">
                    <a class="fa-solid fa-chart-simple "></a>
                  </button>
                </div>
              </div>
            </div>
          `;
    list.appendChild(newDiv);
  });
};

initApp();
