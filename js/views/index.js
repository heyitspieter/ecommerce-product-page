export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return null;
    }

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const updatedMarkup = this._generateMarkup();

    const newDOM = document
      .createRange()
      .createContextualFragment(updatedMarkup);

    const updatedElements = Array.from(newDOM.querySelectorAll('*'));
    const currElements = Array.from(this._parentElement.querySelectorAll('*'));

    updatedElements.forEach((updatedEl, i) => {
      const currEl = currElements[i];

      // Update text content
      if (
        !updatedEl.isEqualNode(currEl) &&
        updatedEl.firstChild?.nodeValue.trim() !== ''
      ) {
        currEl.textContent = updatedEl.textContent;
      }

      // Update changed attrs
      if (!updatedEl.isEqualNode(currEl)) {
        Array.from(updatedEl.attributes).forEach(attr =>
          currEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
