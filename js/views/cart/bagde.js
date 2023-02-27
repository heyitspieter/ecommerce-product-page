import View from '../';
import sprite from 'url:../../../assets/svg/sprite.svg';

class CartBadgeView extends View {
  _parentElement = document.querySelector('.cart-badge');

  constructor() {
    super();
  }

  _generateMarkup() {
    return `
            ${
              this._data.quantity > 0
                ? `<span>${this._data.quantity}</span>`
                : ''
            }
            <div>
                <svg xmlns="http://www.w3.org/2000/svg">
                  <use href="${sprite}#cart" />
                </svg>
              </div>
           `;
  }
}

export default new CartBadgeView();
