function createElement(type, attributes, innerText, parent) {
  const element = document.createElement(type)
  if (attributes) attributes.forEach(attribute => {
    if (attribute[0] == 'className') element.className = attribute[1]
    else element.setAttribute(attribute[0], attribute[1])
  })
  if (innerText) element.innerText = innerText
  if (parent) parent.appendChild(element)
  return element
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

export { createElement, clearContainer }