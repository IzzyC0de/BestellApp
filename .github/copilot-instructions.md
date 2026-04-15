# BestellApp Development Guide

## Project Overview

BestellApp is a food ordering web application for a restaurant (BurgerHouse) built with vanilla HTML, CSS, and JavaScript. It showcases a menu of burgers, pizzas, and salads with an interactive basket/cart system.

**Tech Stack:** Vanilla JavaScript (ES6+), CSS3, HTML5 with Material Design Icons

## Architecture

### Core Layers

1. **Data Layer** (`Scripts/db.js`)
   - `myDishes[]` - Menu items array (burger, pizza, salad objects)
   - `basket[]` - Shopping cart items (name, price, amount)
   - Each dish has: `name`, `price`, `description`, `id`, `category`, `image`

2. **Template Layer** (`Scripts/template.js`)
   - `getDishTemplate(index)` - Returns HTML string for a menu item
   - `getBasketTemplate(item, index)` - Returns HTML string for a basket item
   - Templates use template literals and inline onclick handlers

3. **Presentation Layer** (`script.js` + `index.html`)
   - `renderDishes()` - Populates burger/pizza/salad lists by category
   - `renderBasket()` - Updates basket display and recalculates totals
   - `addToBasket()`, `deleteFromBasket()`, `amountPlusBasket()` - Cart operations
   - `basketCalculator()` - Computes subtotal, delivery fee (€4.90), total
   - `showDialog()` - Displays order confirmation modal (4 second timeout)

### Page Flow

1. `onload="renderDishes()"` in body tag triggers initial menu population
2. Scripts load in order: db.js → template.js → script.js (via `defer` attribute)
3. Category-based rendering: dishes route to `#burgerList`, `#pizzaList`, or `#saladList` sections

### Styling Architecture

- **Stylesheets** in `Styles/` directory:
  - `standard.css` - Base styles and layout
  - `icons.css` - Material Symbols icon definitions
  - `fonts.css` - Font imports
  - `assets.css` - Asset-related styles
  - `basket.css` - Basket/cart specific styles
- **Root stylesheet** - `style.css` (header, hero section, main layout, responsive)
- **CSS Variables** - Uses `--section-width` (check `standard.css` for base dimensions)

## Key Conventions

### Naming Patterns

- **Elements by category**: `#burgerList`, `#pizzaList`, `#saladList` (container divs)
- **Separator sections**: `.burger_Separator`, `.pizza_Separator`, `.salad_Separator`
- **Template class**: `.templateDishes` (reusable menu item card)
- **Basket elements**: `.basketItem`, `.basketPrice`, `.amountNumber`
- **Buttons**: `.animated-button` (consistent button styling with animation)

### Data Structure

Dishes are stored as objects with required fields:
```javascript
{
  name: string,
  price: number,          // e.g., 16.90
  description: string,
  id: number,
  category: "Burger" | "Pizza" | "Salad",
  image: string           // relative path to Assets/img/
}
```

Basket items store:
```javascript
{
  name: string,
  price: number,
  amount: number          // quantity
}
```

### Event Handling

- Inline `onclick` handlers in template strings (e.g., `onclick="addToBasket(0)"`)
- Dialog modal: `showDialog()` uses `<dialog>` element with `.showModal()` / `.close()`
- Material Symbols for icons (e.g., `class="material-symbols-rounded"`)

### Delivery Fee Logic

- Fixed €4.90 fee applied only when basket has items
- Zero fee for empty basket
- Recalculated on every basket update

## Common Tasks

### Adding a New Menu Item

1. Add object to `myDishes[]` array in `Scripts/db.js`
2. Set `category` to "Burger", "Pizza", or "Salad" (case-sensitive)
3. Ensure `image` path points to correct file in `Assets/img/`
4. Call `renderDishes()` to refresh UI (happens automatically on load)

### Modifying Basket Logic

- Update `basketCalculator()` for pricing changes
- Modify `addToBasket()` for addition logic
- Adjust `amountPlusBasket()` cap (currently 100) if needed
- Basket operations always call `renderBasket()` to update UI

### Styling Changes

- For responsive design, check `standard.css` breakpoints and `--section-width` variable
- Basket styling in `basket.css` (grid/flexbox layout)
- Add new category-specific styles by extending separator and item classes

## Testing Checklist

When making changes:
1. Verify `renderDishes()` populates all three categories correctly
2. Test adding/removing items from basket
3. Confirm delivery fee appears/disappears with empty/full basket
4. Check total calculation accuracy (subtotal + delivery)
5. Validate dialog appears on "Buy now" and clears basket after 4 seconds
6. Test responsive layout on mobile viewports

## Notes

- **No build/transpilation required** - Runs as-is in modern browsers
- **No external package manager** - Pure vanilla JavaScript (ES6+)
- **Material Design Icons CDN** - Loaded via CDN link in HTML head
- **Browser compatibility** - Requires `dialog` element support (modern browsers)
