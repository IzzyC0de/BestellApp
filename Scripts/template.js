// Hier kommt der HTML Template rein

function getDishTemplate(indexDishes) {
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
        <span class="price">16.90€</span>
        <button class="animated-button" onclick="addToBasket(${indexDishes})">
          <span>Add to basket</span>
          <span></span>
        </button>
      </div>
    </div>
  </div>`;
}

function getBasketTemplate(indexDishes) {
  return `
  
      <div class="basketItem">
        <span>${myDishes[indexDishes].name}</span>
        <div>
          <div class="amountDishes">
            <span class="material-symbols-rounded">delete</span>
            <span class="amountNumber">1</span>
            <span class="material-symbols-rounded">+</span>
          </div>
          <span>${myDishes[indexDishes].price}€</span>
        </div>
      </div>
  
  `;
}
