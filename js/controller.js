import cartView from './views/cart';
import modalView from './views/modal';
import productView from './views/product';
import sidebarView from './views/sidebar';
import cartAddView from './views/cart/add';
import cartOverlayView from './views/cart/overlay';

import {
  CartRenderController,
  AddToCartController,
  DeleteCartItemController,
} from './controllers/cart';

import {
  ProductRenderController,
  AddProductItemController,
  SubtractProductItemController,
  ProductSliderBtnClickController,
} from './controllers/product';

import { SidebarRenderController } from './controllers/sidebar';

import {
  ModalRenderController,
  ModalBtnClickController,
  ModalCloseBtnClickController,
} from './controllers/modal';

/**
 * Store the current item in a temp
 * before user clicks add to cart buttton
 *  */

const init = function () {
  cartView.addRenderHandler(CartRenderController);
  productView.addRenderHandler(ProductRenderController);
  productView.addItemHandler(AddProductItemController);
  productView.subtractItemHandler(SubtractProductItemController);
  productView.addToCartHandler(AddToCartController);
  productView.slideBtnClickHandler(ProductSliderBtnClickController);
  cartOverlayView.toggleOverlayHanlder();
  cartAddView.removeItemHandler(DeleteCartItemController);
  sidebarView.addRenderHandler(SidebarRenderController);
  modalView.addRenderHandler(ModalRenderController);
  modalView.slideBtnClickHandler(ModalBtnClickController);
  modalView.closeBtnClickHandler(ModalCloseBtnClickController);
};

init();
