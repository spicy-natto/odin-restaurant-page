import { genHtml, htmlToNodes } from "./renderUtils.js";
import shrimpImage from "../images/shrimp-and-grits-small.jpg"

const menuData = [
  {
    name: "Shrimp 'n Grits",
    description:
      "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
    img: shrimpImage,
    price: "$14.99",
  },
  {
    name: "Shrimp 'n Grits",
    description:
      "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
    img: shrimpImage,
    price: "$14.99",
  },
  {
    name: "Shrimp 'n Grits",
    description:
      "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
    img: shrimpImage,
    price: "$14.99",
  },
];

function menuItem(dish) {
  return `<li class="menu-item">
            <h3 class="dish-name">"${dish.name}"</h3>
            <p class="dish-description">"${dish.description}"</p>
            <img src="${dish.img}" alt="${dish.imgAlt}">
            <p class="price">"${dish.price}"</p>
          </li>`;
}

function renderMenu() {
  return `<ul class="menu">${genHtml(menuItem, menuData)}</ul>`;
}

export default htmlToNodes(renderMenu());
