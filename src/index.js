import "./css/styles.css";

const genMenuHTML = {
  genHtml(func, data) {
    return data.reduce((html, currItem) => html.concat(func(currItem)), '');
  },  

  menu() {
    return `<ul>${this.genHtml(this.menuItem, this.menuData)}</ul>`;
  },

  menuItem(dish) {
    return `<li class="menu-item">
              <h3 class="dish-name">"${dish.name}"</h3>
              <p class="dish-description">"${dish.description}"</p>
              <img src="${dish.imgPath}" alt="${dish.imgAlt}">
              <p class="price">"${dish.price}"</p>
            </li>`;
  },

  menuData: [{
      name: "Shrimp 'n Grits",
      description:
        "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
      imgPath: "./images/shrimp-and-grits-small.jpg",
      price: "$14.99",
    },
    {
      name: "Shrimp 'n Grits",
      description:
        "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
      imgPath: "./images/shrimp-and-grits-small.jpg",
      price: "$14.99",
    },
    {
      name: "Shrimp 'n Grits",
      description:
        "The tastiest darn Shrimp 'N Grits this side of the Mississipi",
      imgPath: "./images/shrimp-and-grits-small.jpg",
      price: "$14.99",
    },
  ],
};

function htmlToNodes(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}


console.log(genMenuHTML.menu());
