import { createElement, clearContainer } from "./DOM"

function renderMenu() {
  const container = document.getElementById('tab-content')
  clearContainer(container)

  buildMenuItem('Meat Lover\'s', ['Marinara Sauce', 'Cheese', 'Sausage', 'Pepperoni', 'Bacon', 'Ham', 'Meatballs'], '$17.89', container)
  buildMenuItem('JerkFredo', ['Alfredo Sauce', 'Cheese', 'Jerk Chicken', 'Green Pepper', 'Onion'], '$21.89', container)
  buildMenuItem('Breadsticks', ['Garlic Sauce', 'Parmesan Cheese'], '$11.89', container)
}

function buildMenuItem(name, toppings, price, container) {
  const itemContainer = createElement('div', [['className', 'menu-item-container']], null)

  createElement('p', [['className', 'menu-item-name']], name, itemContainer)

  toppings.forEach(topping => {
    createElement('p', [['className', 'menu-item-topping']], topping, itemContainer)
  })

  createElement('p', [['className', 'menu-item-price']], price, itemContainer)

  container.appendChild(itemContainer)
}

export { renderMenu }