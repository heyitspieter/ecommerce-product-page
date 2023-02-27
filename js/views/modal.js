import View from './';
import sprite from 'url:../../assets/svg/sprite.svg';

class ModalView extends View {
  _parentElement = document.getElementById('modal-overlay');
  _wrapper;

  toggleModal() {
    this._wrapper = document.querySelector('.modal-wrapper');

    this._clear();
  }

  slideBtnClickHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const ctrlEl = e.target.closest('.modal-btn--ctrl');

      if (!ctrlEl) return;

      const gotoSlide = Number(ctrlEl.dataset.goto);

      // Can't get slider element with closest because its overflow is hidden;
      const sliderEl = document.querySelector('.modal-main__slider');

      sliderEl.style.transform = `translateX(-${gotoSlide * 100}%)`;

      handler(gotoSlide);
    });
  }

  closeBtnClickHandler(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.modal-btn--close');

      if (!btn) return;

      this._parentElement.classList.remove('modal');

      this.toggleModal();

      document.body.style.overflow = 'auto';

      handler();
    });
  }

  addRenderHandler(handler) {
    document.body.addEventListener('click', e => {
      const imageEl = e.target.closest('.product-image__slider');

      if (!imageEl) return;

      if (window.innerWidth <= 376) return;

      this._parentElement.classList.add('modal');

      handler();

      document.body.style.overflow = 'hidden';
    });
  }

  _generateMarkup() {
    const prevIndex = this._data.slider.currentIndex - 1;
    const nextIndex = this._data.slider.currentIndex + 1;

    return `
            <div class="modal-wrapper scaleUp">
            <button class="modal-btn--close">
            <svg xmlns="http://www.w3.org/2000/svg">
                <use href="${sprite}#x" />
            </svg>
            </button>
            <div class="modal-main">
            <button data-goto="${
              prevIndex < 0 ? this._data.slider.length - 1 : prevIndex
            }" class="modal-btn--ctrl modal-btn--prev">
                <svg xmlns="http://www.w3.org/2000/svg">
                <use href="${sprite}#arrow-left" />
                </svg>
            </button>
            <div class="modal-main__wrapper">
            <div class="modal-main__slider">
                ${this._data.product.img.slides
                  .map(
                    (slide, i) =>
                      `<img src="${slide.src}" alt="Slide image ${i}" />`
                  )
                  .join('')}
            </div>
            </div>
            <button data-goto="${
              nextIndex >= this._data.slider.length
                ? this._data.slider.currentIndex
                : nextIndex
            }" class="modal-btn--ctrl modal-btn--next">
                <svg xmlns="http://www.w3.org/2000/svg">
                <use href="${sprite}#arrow-right" />
                </svg>
            </button>
            </div>
            <div class="modal-grid">
            ${this._data.product.img.thumbnails
              .map(
                (thumbnail, idx) =>
                  `<div role="button" data-goto="${idx}" class="product-thumbnail-${
                    idx + 1
                  } modal-btn--ctrl ${
                    this._data.slider.currentIndex === idx ? 'active' : ''
                  }">
              <img
              src="${thumbnail.src}"
              alt="thumbnail 1"
              />
          </div>`
              )
              .join('')}
            </div>
        </div>
    `;
  }
}

export default new ModalView();
