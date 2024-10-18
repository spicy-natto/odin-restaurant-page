import { genHtml, htmlToNodes } from "./renderUtils.js";

const staffData = [
  {
    name: "Mrs. Goodfood",
    blurb:
      "Mrs. Goodfood went to Italy to train as a shoemaker but while \
    there decided to learn how to make parmesan cheese. This led \
    her to a restaurant apprenticeship in France where she learned to cook \
    real good.",
  },
  {
    name: "Bob Linecook",
    blurb:
      "Bob also knows how to cook real good. He smokes a briar pipe at \
      home.",
  },
  {
    name: "Belinda Bartender",
    blurb: "Belinda has a masters degree in data science with a minor in \
            mixology. All of her drinks are evidence-backed with high \
            p-values.",
  },
];

function staffMember(staff) {
  return `<div>
            <h3>${staff.name}</h3>
            <p>
              ${staff.blurb}
            </p>
            <hr>
          </div>`;
}

const aboutData = {
  title: "About",
  blurb:
    "We are a small restaurant with really good food. Everyone who works here \
    is a friendly hipster who is oddly fixated on perfecting their favorite \
    dish. We make comfort food and often wear suspenders.",
};

function renderAbout(aboutData) {
  return `<div class="about">
          <div class="blurb">
            <h2>${aboutData.title}</h2>
            <p>
              ${aboutData.blurb}
            </p>
            <hr>
          </div>
          <div class="staff">
            <h2 class="staff-title">staff</h2>
            ${genHtml(staffMember, staffData)}
          </div>
        </div>`;
}

function renderNodes() {
  return htmlToNodes(renderAbout(aboutData));
}

export default renderNodes;
