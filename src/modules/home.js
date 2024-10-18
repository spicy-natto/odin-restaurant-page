import { genHtml, htmlToNodes } from "./renderUtils.js";
import restaurantImage from "../images/home/restaurant-exterior-cropped.jpg";

const infoData = [
  {
    title: "Hours",
    info: "We are open daily from 11:00am to 9:00pm",
  },
  {
    title: "Address",
    info: "301 East Tasty Avenue, Flavortown, FL 99999",
  },
  {
    title: "Phone",
    info: "867-5309",
  },
];

function infoItem(info) {
  return `<div>
            <h2>${info.title}</h2>
            <p>${info.info}</p>
          </div>`
}

const homeData = {
  img: restaurantImage,
  imgAlt: "restaurant exterior",
};

function renderHome(homeData) {
  return `<div class="home">
            <div class="info">
              ${genHtml(infoItem, infoData)}
            </div>
            <img src="${homeData.img}" alt="${homeData.imgAlt}">
          </div>`;
}

function renderNodes() {
  return htmlToNodes(renderHome(homeData));
}

export default renderNodes;
