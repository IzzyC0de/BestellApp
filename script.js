function renderDishes() {
  let contentRef = ["burgerList", "pizzaList", "saladList"];
  contentRef.forEach((id) => {
    let element = document.getElementById(id);
    if (element) element.innerHTML = "";
  });

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
      document.getElementById(targetId).innerHTML +=
        getDishTemplate(indexDishes);
    }
  }
}

function renderBasket() {
  let basketRef = document.getElementById("basketDishes");
  basketRef.innerHTML = "";

  for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
    const myBasket = basket[indexBasket];
    basketRef.innerHTML += getBasketTemplate(myBasket, indexBasket);
  }

  basketCalculator();
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
  let basketRef = document.getElementById("basketDishes");

  let Dialog = document.getElementById("myDialog");
  Dialog.showModal();
  Dialog.classList.add("active")
  setTimeout(() =>{
    Dialog.close();
    Dialog.classList.remove("active")
  }, 4000);
  
  basket.length = 0;
  renderBasket();
  basketRef.innerHTML = "";
}
