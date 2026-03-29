// Hier kommt der HTML Template rein

function getDishTemplate(indexDishes) {
  return`

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
        <button class="animated-button">
          <span>Add to basket</span>
          <span></span>
        </button>
      </div>
    </div>
  </div>`;
}
