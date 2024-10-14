import "./css/styles.css";
import menu from "./modules/menu.js";
import menuNodes from "./modules/menu.js";
import { renderContent } from "./modules/renderUtils.js";

const contentButton = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

menuButton.addEventListener('click', () => {
    renderContent(contentButton, menuNodes);
});