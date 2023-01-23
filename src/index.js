import { renderBase } from './base'
import { renderHomepage } from './homepage'
import { renderMenu } from './menu'
import { renderContact } from './contact'

window.onload = () => init()

function init() {
  renderBase()
  renderHomepage()

  const homeButton = document.getElementById('home-button')
  homeButton.onclick = () => renderHomepage()

  const menuButton = document.getElementById('menu-button')
  menuButton.onclick = () => renderMenu()

  const contactButton = document.getElementById('contact-button')
  contactButton.onclick = () => renderContact()
}