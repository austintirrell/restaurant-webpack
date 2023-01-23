import { createElement, clearContainer } from "./DOM"

function renderHomepage() {
  const container = document.getElementById('tab-content')
  clearContainer(container)

  createElement('img', [['className', 'home-hero'], ['src', 'img/pizza.webp']], null, container)

  const descriptionContainer = createElement('div', [['className', 'description-container']], null, container)
  createElement('p', [['className', 'description-header']], 'Wood Fire Quality Gourmet Pizza', descriptionContainer)
  createElement('p', [['className', 'description-text']], 'Locally Sourced, Crafted with Love', descriptionContainer)

  const reviewContainer = createElement('div', [['className', 'review-container']], null, container)
  const starContainer = createElement('div', [['className', 'star-container']], null, reviewContainer)
  for (let i = 0; i < 5; i++) {
    createElement('img', [['className', 'star-icon'], ['src', 'img/star.svg']], null, starContainer)
  }
  createElement('p', [['className', 'five-star-description']], 'Come find out why we\'re rated 5 stars on Google', reviewContainer)

  const companyInfoContainer = createElement('div', [['className', 'company-info-container']], null, container)
  createElement('p', [['className', 'company-info-phone']], '(219) 809-1988', companyInfoContainer)
  createElement('p', [['className', 'company-info-address']], '1904 U.S. 20 Michigan City, IN 46360', companyInfoContainer)
  createElement('p', [['className', 'company-info-hours']], 'Tuesday - Saturday, 4pm - 10pm', companyInfoContainer)
}

export { renderHomepage }