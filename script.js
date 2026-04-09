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
    basket[indexBasket].price * basket[indexBasket].amount;
  }
  renderBasket();
}
