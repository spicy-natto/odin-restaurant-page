function genHtml(func, data) {
  return data.reduce((html, currItem) => html.concat(func(currItem)), "");
}

function htmlToNodes(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}

function renderContent(parentNode, html) {
  parentNode.replaceChildren(htmlToNodes(html));
}

export { genHtml, htmlToNodes, renderContent };
