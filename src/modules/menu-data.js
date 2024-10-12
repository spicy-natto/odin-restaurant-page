const template = {
  "elem": "li",
  "classList": ["menu-item"],
  "children": [
    {
      "elem": "h3",
      "classList": ["dish-name"],
      "text": "{{dishName}}"
    },
    {
      "elem": "p",
      "classList": ["dish-description"],
      "text": "{{description}}"
    },
    {
      "elem": "img",
      "attrib": { "src": "{{*imgPath}}{{imgSource}}", "alt": "{{imgAlt}}" }
    },
    { "elem": "p", "classList": ["price"], "text": "{{price}}" }
  ]
}

export default template