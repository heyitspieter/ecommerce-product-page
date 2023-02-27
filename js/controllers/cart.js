import * as model from '../models';
import cartView from '../views/cart';
import cartAddView from '../views/cart/add';
import cartBadgeView from '../views/cart/bagde';

/**Cart Controller */

export const CartRenderController = function () {
  model.retrieveCart();

  if (model.state.cart.items.length) {
    cartBadgeView.render({ quantity: model.state.cart.totalQuantity });
    cartAddView.render({ cart: model.state.cart });

    return null;
  }

  // Render empty state
  cartView.render({});
};

export const AddToCartController = function () {
  if (!Object.keys(model.temp).length) return null;

  const { index } = model.getCartItem(model.temp?.id);

  if (index === -1) {
    model.state.cart.items = [model.temp, ...model.state.cart.items];

    model.state.cart.totalQuantity = model.state.cart.items.reduce(
      (acc, curr) => (acc += curr.quantity),
      0
    );

    cartBadgeView.render({ quantity: model.state.cart.totalQuantity });

    cartAddView.render({ cart: model.state.cart });

    model.persistCart();

    return null;
  }

  model.state.cart.items[index] = model.temp;

  model.state.cart.totalQuantity = model.state.cart.items.reduce(
    (acc, curr) => (acc += curr.quantity),
    0
  );

  cartBadgeView.render({ quantity: model.state.cart.totalQuantity });

  cartAddView.render({ cart: model.state.cart });

  model.persistCart();
};

export const DeleteCartItemController = function (itemId) {
  const { index } = model.getCartItem(itemId);

  let updatedCart = { ...model.state.cart };

  if (updatedCart.items.length <= 1) {
    updatedCart.items = [];
    updatedCart.totalQuantity = 0;
    updatedCart.totalAmount = 0;

    for (const key in model.state.cart) {
      model.state.cart[key] = updatedCart[key];
    }

    cartBadgeView.render({ quantity: model.state.cart.totalQuantity });
    cartView.render({});
  } else {
    updatedCart.items.splice(index, 1);

    updatedCart.totalQuantity = updatedCart.items.reduce(
      (acc, curr) => (acc += curr.quantity),
      0
    );

    updatedCart.totalAmount = updatedCart.items.reduce(
      (acc, curr) => (acc += curr.quantity * curr.price),
      0
    );

    for (const key in model.state.cart) {
      model.state.cart[key] = updatedCart[key];
    }

    cartBadgeView.render({ quantity: model.state.cart.totalQuantity });
    cartAddView.render({ cart: model.state.cart });
  }

  model.persistCart();
};

/**Cart Controller */
