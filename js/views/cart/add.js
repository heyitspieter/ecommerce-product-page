import View from '../';
import sprite from 'url:../../../assets/svg/sprite.svg';

class CartAddView extends View {
  _parentElement = document.querySelector('.cart__wrapper');

  constructor() {
    super();
  }

  removeItemHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--delete');

      if (!btn) return;

      const itemId = Number(btn.dataset.id.split('-')[1]);

      handler(Number(itemId));
    });
  }

  _generateMarkup() {
    return `
            <div class="cart__head">
                <h3>Cart</h3>
            </div>
            ${this._data.cart.items
              .map(
                item =>
                  `
                <div class="cart__list">
                <div class="cart__list-item">
                    <figure>
                      <img
                          src="${item.imgSrc}"
                          alt="cart image"
                      />
                    </figure>
                    <div>
                    <p>${item.name}</p>
                    <span>$${item.price.toFixed(2)} x ${
                    item.quantity
                  }   <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </span>
                    </div>
                    <button data-id="item-${item.id}" class="btn--delete">
                      <svg xmlns="http://www.w3.org/2000/svg">
                          <use href="${sprite}#trash" />
                      </svg>
                    </button>
                </div>
                </div>
                <div class="cart__btn">
                  <button>Checkout</button>
                </div>
                `
              )
              .join('')}
           `;
  }
}

export default new CartAddView();
