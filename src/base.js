import { createElement } from "./DOM"

function renderBase() {
  const container = document.getElementById('content')

  const header = createElement('header', null, null, content)

  createElement('h1', [['className', 'company-name']], 'Pizza Stop', header)

  const tabsContainer = createElement('div', [['className', 'tabs-container']], null, header)
  createElement('button', [['className', 'tab-button'], ['id', 'home-button']], 'Home', tabsContainer)
  createElement('button', [['className', 'tab-button'], ['id', 'menu-button']], 'Menu', tabsContainer)
  createElement('button', [['className', 'tab-button'], ['id', 'contact-button']], 'Contact', tabsContainer)

  createElement('div', [['id', 'tab-content']], null, content)
}

export { renderBase }