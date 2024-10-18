import "./css/styles.css";
import renderMenu from "./modules/menu.js";
import renderHome from "./modules/home.js";
import renderAbout from "./modules/about.js";
import { renderContent } from "./modules/renderUtils.js";

const contentButton = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

menuButton.addEventListener('click', () => {
    renderContent(contentButton, renderMenu());
});

homeButton.addEventListener('click', () => {
    renderContent(contentButton, renderHome());
});

aboutButton.addEventListener('click', () => {
    renderContent(contentButton, renderAbout());
});

renderContent(contentButton, renderHome());