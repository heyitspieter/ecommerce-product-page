import View from './';
import sprite from 'url:../../assets/svg/sprite.svg';
import imageplaceholder from 'url:../../assets/img/imageplaceholder.jpg';

class ProductView extends View {
  _parentElement = document.querySelector('.product');

  constructor() {
    super();
  }

  addRenderHandler(handler) {
    window.addEventListener('load', handler);
  }

  subtractItemHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--subtract');

      if (!btn) return;

      handler();
    });
  }

  addItemHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--add');

      if (!btn) return;

      handler();
    });
  }

  addToCartHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--cart-add');

      if (!btn) return;

      handler();
    });
  }

  slideBtnClickHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const ctrlEl = e.target.closest('.product-btn--ctrl');

      if (!ctrlEl) return;

      const gotoSlide = Number(ctrlEl.dataset.goto);

      // Can't get slider element with closest because its overflow is hidden;
      const sliderEl = document.querySelector('.product-image__slider');

      sliderEl.style.transform = `translateX(-${gotoSlide * 100}%)`;

      handler(gotoSlide);
    });
  }

  _generateMarkup() {
    const prevIndex = this._data.slider.currentIndex - 1;
    const nextIndex = this._data.slider.currentIndex + 1;

    return `
            <div class="product-image">
            <button data-goto="${
              prevIndex < 0 ? this._data.slider.length - 1 : prevIndex
            }" class="product-btn--ctrl product-btn--prev">
              <svg xmlns="http://www.w3.org/2000/svg">
                <use href="${sprite}#arrow-left" />
              </svg>
            </button>
            <div class="product-image__wrapper">
              <div class="product-image__slider">
              ${this._data.product.img.slides
                .map(
                  slide =>
                    `<img width="400" height="400" src="${slide.src}" alt="Main Image" />`
                )
                .join('')}
              </div>
            </div>
            <button data-goto="${
              nextIndex >= this._data.slider.length
                ? this._data.slider.currentIndex
                : nextIndex
            }" class="product-btn--ctrl product-btn--next">
              <svg xmlns="http://www.w3.org/2000/svg">
                <use href="${sprite}#arrow-right" />
              </svg>
            </button>
            <div class="product-image__thumbnails">
            ${this._data.product.img.thumbnails
              .map(
                (thumbnail, idx) =>
                  `<div role="button" data-goto="${idx}" class="product-thumbnail-${
                    idx + 1
                  } product-btn--ctrl ${
                    this._data.slider.currentIndex === idx ? 'active' : ''
                  }">
                    <img
                    src="${thumbnail.src}"
                    alt="thumbnail ${idx + 1}"
                    />
                  </div>`
              )
              .join('')}
            </div>
        </div>
        <div class="product-info">
            <div class="product-tag">
            <p>Sneaker company</p>
            </div>
            <div class="product-heading">
            <h1>${this._data.product.name}</h1>
            </div>
            <div class="product-description">
            <p>
                ${this._data.product.description}
            </p>
            </div>
            <div class="product-value">
            <div class="product-value__price">
                <p>$${this._data.product.price.toFixed(2)}</p>
                <span>${this._data.product.discount}%</span>
            </div>
            <div class="product-value__discount">
                <p>$${this._data.product.oldPrice.toFixed(2)}</p>
            </div>
            </div>
            <div class="product-menu">
            <div class="product-qty-selector">
                <span class="btn--subtract">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <use href="${sprite}#minus" />
                </svg>
                </span>
                <span class="num">${
                  this._data.item ? this._data.item.quantity : 0
                }</span>
                <span class="btn--add">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <use href="${sprite}#plus" />
                </svg>
                </span>
            </div>
            <div class="product-btn">
                <button type="button" class="btn--cart-add">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg">
                        <use href="${sprite}#cart" />
                        </svg>
                    </span>
                    <span>Add to cart</span>
                </button>
            </div>
            </div>
        </div> 
    `;
  }

  renderSkeleton() {
    const markup = `
    <div class="product-image">
    <div class="product-image__wrapper">
      <div class="product-image__slider">
        <img src="${imageplaceholder}" alt="Main Image" />
      </div>
    </div>
    <div class="product-image__thumbnails">
      <div class="product-thumbnail-1">
        <img
          src="${imageplaceholder}"
          alt="thumbnail 1"
        />
      </div>
      <div class="product-thumbnail-2">
        <img
          src="${imageplaceholder}"
          alt="thumbnail 2"
        />
      </div>
      <div class="product-thumbnail-3">
        <img
          src="${imageplaceholder}"
          alt="thumbnail 3"
        />
      </div>
      <div class="product-thumbnail-4">
        <img
          src="${imageplaceholder}"
          alt="thumbnail 4"
        />
      </div>
    </div>
  </div>
  <div style="align-self: stretch;" class="product-info">
  </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new ProductView();
