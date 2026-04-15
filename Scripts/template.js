// Hier kommt der HTML Template rein

function getDishTemplate(indexDishes) {
  let priceFormated = myDishes[indexDishes].price;
  return `

  <div class="templateDishes">
    <img
      src="${myDishes[indexDishes].image}"
      alt="${myDishes[indexDishes].description}"
      class="dishImage"
    />
    <div class="dishInfo">
      <div class="dishDescription">
        <h2>${myDishes[indexDishes].name}</h2>
        <span>
          ${myDishes[indexDishes].description}
        </span>
      </div>
      <div class="priceButton">
        <span class="price">${myDishes[indexDishes].price.toFixed(2)}</span>
        <button class="animated-button" onclick="addToBasket(${indexDishes})">
          <span>Add to basket</span>
          <span></span>
        </button>
      </div>
    </div>
  </div>`;
}

function getBasketTemplate(myBasket, indexBasket) {
  let subPrice = myBasket.price * myBasket.amount;
  return `
  
      <div class="basketItem">
        <h3>${myBasket.name}</h3>
        <div class="basketAmountPrice">
          <div class="amountDishes">
            <button class="material-symbols-rounded" onclick="deleteFromBasket(${indexBasket})" id="basketDeleteButton">delete</button>
            <span class="amountNumber">${myBasket.amount}</span>
            <button class="material-symbols-rounded" onclick="amountPlusBasket(${indexBasket})" id="basketPlusButton">add</button>
          </div>
          <span class="basketPrice">${subPrice.toFixed(2)}€</span>
        </div>
      </div>
  
  `;
}

