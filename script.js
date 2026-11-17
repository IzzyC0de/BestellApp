function renderDishes() {
  let contentRef = ["burgerList", "pizzaList", "saladList"];
  contentRef.forEach((id) => {
    let element = document.getElementById(id);
    if (element) element.innerHTML = "";
  });

  renderDishesByCategory();
}

function renderDishesByCategory() {
  for (let indexDishes = 0; indexDishes < myDishes.length; indexDishes++) {
    const dish = myDishes[indexDishes];
    let targetId = "";
    if (dish.category === "Burger") {
      targetId = "burgerList";
    } else if (dish.category === "Pizza") {
      targetId = "pizzaList";
    } else if (dish.category === "Salad") {
      targetId = "saladList";
    }
    if (targetId) {
      let priceFormated = dish.price.toFixed(2);
      document.getElementById(targetId).innerHTML +=
        getDishTemplate(indexDishes, priceFormated);
    }
  }
}

function renderBasket() {
  let basketRef = document.getElementById("basketDishes");
  basketRef.innerHTML = "";
  for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
    const myBasket = basket[indexBasket];
    let subPrice = myBasket.price * myBasket.amount;
    basketRef.innerHTML += getBasketTemplate(myBasket, indexBasket, subPrice);
  }
  basketCalculator();
  for (let indexDishes = 0; indexDishes < myDishes.length; indexDishes++) {
    updateDishCount(indexDishes);
  }
  updateNavCount();
}

function addToBasket(indexDishes) {
  let dish = myDishes[indexDishes];
  let existingItem = basket.find((item) => item.name === dish.name);
  if (existingItem) {
    existingItem.amount++;
  } else {
    basket.push({
      name: dish.name,
      price: dish.price,
      amount: 1,
    });
  }
  renderBasket();
}

function deleteFromBasket(indexBasket) {
  if (basket[indexBasket].amount > 1) {
    basket[indexBasket].amount--;
  } else {
    basket.splice(indexBasket, 1);
  }
  renderBasket();
}

function amountPlusBasket(indexBasket) {
  if (basket[indexBasket].amount < 100) {
    basket[indexBasket].amount++;
  }
  renderBasket();
}

function basketCalculator() {
  let subtotal = 0;
  for (let i = 0; i < basket.length; i++) {
    subtotal += basket[i].price * basket[i].amount;
  }
  let deliveryFee;
  if (subtotal > 0) {
    deliveryFee = 4.9;
  } else {
    deliveryFee = 0;
  }
  let total = subtotal + deliveryFee;
  document.getElementById("subtotal").innerHTML = `${subtotal.toFixed(2)} €`;
  document.getElementById("delivery-fee").innerHTML =
    `${deliveryFee.toFixed(2)} €`;
  document.getElementById("total-price").innerHTML = `${total.toFixed(2)} €`;
}

function showDialog() {
  if (basket.length === 0) return;
  let Dialog = document.getElementById("myDialog");
  Dialog.showModal();
  document.body.style.overflow = "hidden";
  Dialog.onclose = () => {
    document.body.style.overflow = "";
  };
  Dialog.classList.add("active");
  setTimeout(() => {
    Dialog.close();
    Dialog.classList.remove("active");
  }, 4000);
  resetBasket();
}

function resetBasket() {
  basket.length = 0;
  renderBasket();
  document.getElementById("basket").classList.remove("active");
  document.getElementById("basketIcon").src = "./assets/img/Basket.png";
}

function toggleBasket() {
  const basket = document.getElementById("basket");
  const basketIcon = document.getElementById("basketIcon");
  if (window.innerWidth <= 770) {
    basket.classList.toggle("active");
    if (basket.classList.contains("active")) {
      basketIcon.src = "./assets/img/Basket_active.png";
    } else {
      basketIcon.src = "./assets/img/Basket.png";
    }
  }
}

function updateDishCount(indexDishes) {
  const dish = myDishes[indexDishes];
  const basketItem = basket.find((item) => item.name === dish.name);
  const countRef = document.getElementById(`basketCount-${indexDishes}`);
  countRef.innerHTML = basketItem ? basketItem.amount : 0;
}

function updateNavCount() {
  let totalAmount = 0;
  for (let i = 0; i < basket.length; i++) {
    totalAmount += basket[i].amount;
  }
  document.getElementById("basketNavCount").innerHTML = totalAmount;
}
