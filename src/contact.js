import { createElement, clearContainer } from "./DOM"

function renderContact() {
  const container = document.getElementById('tab-content')
  clearContainer(container)

  const form = createElement('form', null, null, container)

  createElement('label', [['for', 'name-input']], 'Full name:', form)
  createElement('input', [['type', 'text'], ['id', 'name-input']], null, form)

  createElement('label', [['for', 'phone-input']], 'Phone:', form)
  createElement('input', [['type', 'text'], ['id', 'phone-input']], null, form)

  createElement('label', [['for', 'comments-input']], 'Comments:', form)
  createElement('textarea', [['type', 'text'], ['id', 'comments-input']], null, form)

  createElement('button', [['type', 'submit'], ['id', 'submit-form-button']], 'Submit', form)
}

export { renderContact }