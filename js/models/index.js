import { cartState } from './cart';
import { modalState } from './modal';
import { productState } from './product';

export { retrieveCart, persistCart, getCartItem } from './cart';

export let temp = {};

export const state = {
  cart: cartState,
  modal: modalState,
  product: productState,
};
