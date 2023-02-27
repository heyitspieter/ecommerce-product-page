import View from '../';

class CartOverlayView extends View {
  _parentElement = document.querySelector('.navigation__menu');

  constructor() {
    super();
  }

  toggleOverlayHanlder() {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.id === 'cart-overlay') {
        const inputCheckbox = document.querySelector('#cart-menu');
        inputCheckbox.checked = false;
      }
    });
  }

  _generateMarkup() {}
}

export default new CartOverlayView();
