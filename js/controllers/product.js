import * as model from '../models';
import productView from '../views/product';

export const ProductRenderController = function () {
  productView.renderSkeleton();

  const { item } = model.getCartItem(model.state.product.product.id);

  const { slider } = model.state.product;

  slider.length = model.state.product.product.img?.slides?.length;

  if (item) {
    for (const key in item) {
      model.temp[key] = item[key];
    }
  }

  productView.render({
    ...model.state.product,
    item,
    slider,
  });
};

export const SubtractProductItemController = function () {
  const temp =
    Object.keys(model.temp).length ||
    model.getCartItem(model.state.product.product.id).item;

  if (temp) {
    if (model.temp.quantity > 1) {
      model.temp.quantity -= 1;
    }

    productView.update({ ...model.state.product, item: model.temp });
  }
};

export const AddProductItemController = function () {
  const item = model.state.product.product;

  const temp =
    Object.keys(model.temp).length ||
    model.getCartItem(model.state.product.product?.id).item;

  if (temp) {
    if (model.temp.quantity < item.maxQuantity) {
      model.temp.quantity += 1;
    }
  } else {
    model.temp.id = item.id;
    model.temp.name = item.name;
    model.temp.price = item.price;
    model.temp.quantity = 1;
    model.temp.imgSrc = item.img.src;
  }

  productView.update({ ...model.state.product, item: model.temp });
};

export const ProductSliderBtnClickController = function (index) {
  const { slider } = model.state.product;

  if (index > 0 && index < slider.length) {
    const currentIndex = slider.currentIndex;

    let newIndex = index;

    if (newIndex === currentIndex) {
      return;
    }

    slider.currentIndex = newIndex;

    productView.update({
      ...model.state.product,
      slider,
    });
  } else {
    slider.currentIndex = 0;

    productView.update({
      ...model.state.product,
      slider,
    });
  }
};
