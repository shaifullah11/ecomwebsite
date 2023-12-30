$(document).ready(function () {
  $('#shop-main-filter-featured-content-carosel').carousel({
    wrap: false
  });
});

$(document).ready(function () {

  const prev = $('.shop-main-filter-featured-title-button-prev');
  const previ = $('.shop-main-filter-featured-title-button-prev i');
  const next = $('.shop-main-filter-featured-title-button-next');
  const nexti = $('.shop-main-filter-featured-title-button-next i');
  previ.css("color", "rgb(231, 231, 231)")
  next.on("click", function () {
    previ.css("color", "black")
    const activeButton = $('.carousel-item.active')
    const nextactiveButton = activeButton.index()
    if (nextactiveButton > 0) {
      nexti.css("color", "rgb(231, 231, 231)")
    }
    else {
      nexti.css("color", "black")
    }
  })
  prev.on("click", function () {
    nexti.css("color", "black")
    const activeButton = $('.carousel-item.active')
    const prevactiveButton = activeButton.index()
    if (prevactiveButton == 0 || prevactiveButton == 1) {
      previ.css("color", "rgb(231, 231, 231)")
    }
    else {
      previ.css("color", "black")
    }
  })
})



// ///////////////////////
const minPin = document.getElementById('min-pin');
const maxPin = document.getElementById('max-pin');
const minPriceDisplay = document.getElementById('min-price-display');
const maxPriceDisplay = document.getElementById('max-price-display');
const priceBar = document.querySelector('.price-bar');
const priceRange = 480; // Max price range
const barRect = priceBar.getBoundingClientRect();

minPin.style.left = '0px';
maxPin.style.left = `${barRect.width - 5}px`;

let minPinDragging = false;
let maxPinDragging = false;

minPin.addEventListener('mousedown', () => {
  minPinDragging = true;
});

maxPin.addEventListener('mousedown', () => {
  maxPinDragging = true;
});

document.addEventListener('mousemove', (e) => {
  if (minPinDragging) {
    movePin(minPin, e.clientX, true);
  }
  if (maxPinDragging) {
    movePin(maxPin, e.clientX, false);
  }
});

document.addEventListener('mouseup', () => {
  minPinDragging = false;
  maxPinDragging = false;
});

function movePin(pin, mouseX, isMin) {
  let newPosition = mouseX - barRect.left;

  if (newPosition < 0) {
    newPosition = 0;
  } else if (newPosition > barRect.width - 5) {
    newPosition = barRect.width - 5;
  }

  if (!isMin) {
    const minPinPosition = parseFloat(minPin.style.left);
    if (newPosition < minPinPosition) {
      newPosition = minPinPosition;
    }
  } else {
    const maxPinPosition = parseFloat(maxPin.style.left);
    if (newPosition > maxPinPosition) {
      newPosition = maxPinPosition;
    }
  }

  pin.style.transition = 'none'; // Disable transition while dragging
  pin.style.left = newPosition + 'px';

  const price = Math.round((newPosition / (barRect.width - 5)) * priceRange + 19);
  const formattedPrice = `$${price}.00`;
  pin === minPin
    ? (minPriceDisplay.textContent = formattedPrice)
    : (maxPriceDisplay.textContent = formattedPrice);
}

minPin.addEventListener('mouseup', () => {
  minPin.style.transition = 'left 0.2s'; // Restore transition after dragging
});

maxPin.addEventListener('mouseup', () => {
  maxPin.style.transition = 'left 0.2s'; // Restore transition after dragging
});

// ////////////////////////////
$(document).ready(function () {
  let quickviewContainer = document.querySelector('.quickview-container');
  $('.quickview-container-btn').on('click', function () {
    quickviewContainer.style.display = 'flex';
    const dataName = $(this).data('name');
    $('.quickview-container-items').each(function () {
      const closeButton = $(this).find(".fa-xmark");
      const dataTarget = $(this).data('target');
      if (dataName === dataTarget) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }

    });
  });
  $('.fa-xmark').on('click', function () {
    $(this).closest('.quickview-container-items').removeClass('active');
    quickviewContainer.style.display = 'none';


  });
});



// ///////////////////////////////

const counters = document.querySelectorAll(".product-type-add-to-card-counter");

// Loop through each counter and set up event listeners
counters.forEach((counter) => {
  const incrementButton = counter.querySelector(".increment");
  const decrementButton = counter.querySelector(".decrement");
  const countElement = counter.querySelector(".count");

  let count = 1;
  countElement.textContent = count;

  function increment() {
    count++;
    countElement.textContent = count;
  }

  function decrement() {
    if (count > 0) {
      count--;
      countElement.textContent = count;
    }
  }

  incrementButton.addEventListener("click", increment);
  decrementButton.addEventListener("click", decrement);
});



// /////////////////////
$(document).ready(function () {
  const priceplus = $('.shop-main-filter-pp');
  const priceminus = $('.shop-main-filter-pm');
  const colorplus = $('.shop-main-filter-cp');
  const colorminus = $('.shop-main-filter-cm');
  const priceContent = $('.shop-main-filter-price-content');
  const colorContent = $('.shop-main-filter-color-content');
  priceplus.css('display', 'none')
  colorplus.css('display', 'none')
  priceminus.on('click', function () {
    priceplus.css('display', 'flex')
    priceContent.css('display', "none")
    priceminus.css('display', "none")

    priceplus.on('click', function () {
      priceplus.css('display', 'none')
      priceContent.css('display', "block")
      priceminus.css('display', "flex")
    })
  })
  colorminus.on('click', function () {
    colorplus.css('display', 'flex')
    colorContent.css('display', "none")
    colorminus.css('display', "none")

    colorplus.on('click', function () {
      colorplus.css('display', 'none')
      colorContent.css('display', "block")
      colorminus.css('display', "flex")
    })
  })

})







$('.shopping').on('click',function(){
  $('.addToCard').toggleClass('active')
})



// const shopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const total = document.querySelector('.total');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('body');
const noOfItems = document.querySelector('.NoOfItems');
const navBarIconCount = document.querySelector('.nav-cart-count-items');
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
// const sortedProducts = products.sort((a, b) => {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   const productNameA = a.productName ? a.productName.toUpperCase() : "";
//   const productNameB = b.productName ? b.productName.toUpperCase() : "";

//   if (nameA < nameB) {
//     return -1;
//   } else if (nameA > nameB) {
//     return 1;
//   } else {
//     // If the names are equal, compare based on productName
//     if (productNameA < productNameB) {
//       return -1;
//     } else if (productNameA > productNameB) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
// });

// console.log(sortedProducts);

if(listCard.innerHTML = ""){
  let noItems = document.createElement('div')
  noItems.innerHTML = `
  <div>You have no items in your shopping cart.</div>
  `
}

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
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  else {
    listCards[key].quantity += 1;
  }
  reloadCard();
}
const reloadCard = () => {
  listCard.innerHTML = "";
  
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.quantity * value.price;
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

    navBarIconCount.innerHTML = value.quantity
    total.innerHTML = `$${totalPrice}.00`;
    quantity.innerHTML = count;
    navBarIconCount.innerHTML = count;
    if (count > 1) {

      noOfItems.innerHTML = `${count} ITEMS`
    }
    else {
      noOfItems.innerHTML = `${count} ITEM`
    }
  })
}
const deleteItems = (key) => {
  reloadCard()
  delete listCards[key]
  reloadCard()
}

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


$('.shop-main-content-show-icon .fa-table-cells').on('click', function () {
  $('.shop-main-content-items .list').css('display', 'none')
  $('.shop-main-content-items-cardcont').css('display', 'flex')
  $('.shop-main-content-show-icon .fa-table-cells').toggleClass('active')
  $('.shop-main-content-show-icon .fa-list').toggleClass('active')
})
$('.shop-main-content-show-icon .fa-list').on('click', function () {
  $('.shop-main-content-items .list').css('display', 'block')
  $('.shop-main-content-items-cardcont').css('display', 'none')
  $('.shop-main-content-show-icon .fa-table-cells').toggleClass('active')
  $('.shop-main-content-show-icon .fa-list').toggleClass('active')
})

// detail view





