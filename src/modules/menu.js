import { genHtml, htmlToNodes } from "./renderUtils.js";

const menuData = [
  {
    name: "Shrimp 'n Grits",
    description:
      "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
    imgPath: "shrimp-and-grits-small.jpg",
    price: "$14.99",
  },
  {
    name: "Shrimp 'n Grits",
    description:
      "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
    imgPath: "shrimp-and-grits-small.jpg",
    price: "$14.99",
  },
  {
    name: "Shrimp 'n Grits",
    description:
      "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
    imgPath: "shrimp-and-grits-small.jpg",
    price: "$14.99",
  },
];

const imagePath = "./images/menu/"

function menuItem(dish) {
  return `<li class="menu-item">
            <h3 class="dish-name">"${dish.name}"</h3>
            <p class="dish-description">"${dish.description}"</p>
            <img src="${imagePath + dish.imgPath}" alt="${dish.imgAlt}">
            <p class="price">"${dish.price}"</p>
          </li>`;
}

function renderMenu() {
  return `<ul>${genHtml(menuItem, menuData)}</ul>`;
}

export default htmlToNodes(renderMenu());
