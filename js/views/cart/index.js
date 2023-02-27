import View from "../";

class CartView extends View {
  _parentElement = document.querySelector(".cart__wrapper");

  constructor() {
    super();
  }

  addRenderHandler(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return `
            <div class="cart__head">
                <h3>Cart</h3>
            </div>
            <div class="cart__empty">
                <p>Your cart is empty</p>
            </div>
           `;
  }
}

export default new CartView();
