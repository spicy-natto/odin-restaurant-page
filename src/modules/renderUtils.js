function genHtml(func, data) {
  return data.reduce((html, currItem) => html.concat(func(currItem)), "");
}

function htmlToNodes(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}

function nodesToArray (nodeList) {
  return Array.from(nodeList, x => x.cloneNode(true));
}

function renderContent(parentNode, nodes) {
  // Use nodesToArray to eliminate sideEffects
  parentNode.replaceChildren(...nodesToArray(nodes));
}

export { genHtml, htmlToNodes, renderContent };
