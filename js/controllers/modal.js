import * as model from '../models';
import modalView from '../views/modal';

export const ModalRenderController = function () {
  model.state.modal.length = model.state.product.product.img?.slides?.length;

  modalView.render({
    ...model.state.product,
    slider: { ...model.state.modal },
  });
};

export const ModalBtnClickController = function (index) {
  if (index > 0 && index < model.state.modal.length) {
    const currentIndex = model.state.modal.currentIndex;

    let newIndex = index;

    if (newIndex === currentIndex) {
      return;
    }

    model.state.modal.currentIndex = newIndex;

    modalView.update({
      ...model.state.product,
      slider: { ...model.state.modal },
    });
  } else {
    model.state.modal.currentIndex = 0;

    modalView.update({
      ...model.state.product,
      slider: { ...model.state.modal },
    });
  }
};

export const ModalCloseBtnClickController = function () {
  model.state.modal.currentIndex = 0;
  model.state.modal.length = 0;
};
