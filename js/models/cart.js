export const cartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const addItem = function () {};

export const updateQuantity = function () {};

export const getCartItem = function (id = null) {
  let item = null;

  if (!id) return { index: -1, item };

  const index = cartState.items.findIndex(item => item.id === id);

  if (index !== -1) {
    item = cartState.items[index];

    return { index, item };
  }

  return { index: -1, item };
};

export const retrieveCart = function () {
  const cart = localStorage.getItem('cart');

  if (cart) {
    cartObj = JSON.parse(cart);

    for (const key in cartObj) {
      cartState[key] = cartObj[key];
    }
  }
};

export const persistCart = function () {
  localStorage.setItem('cart', JSON.stringify(cartState));
};
