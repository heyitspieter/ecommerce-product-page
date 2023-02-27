import imageProduct from 'url:../assets/img/image-product-1.jpg';
import imageProduct_2 from 'url:../assets/img/image-product-2.jpg';
import imageProduct_3 from 'url:../assets/img/image-product-3.jpg';
import imageProduct_4 from 'url:../assets/img/image-product-4.jpg';
import imageThumbnail_1 from 'url:../assets/img/image-product-1-thumbnail.jpg';
import imageThumbnail_2 from 'url:../assets/img/image-product-2-thumbnail.jpg';
import imageThumbnail_3 from 'url:../assets/img/image-product-3-thumbnail.jpg';
import imageThumbnail_4 from 'url:../assets/img/image-product-4-thumbnail.jpg';

export const product = {
  id: 1101,
  name: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 125,
  discount: 50,
  oldPrice: 250,
  maxQuantity: 5,
  img: {
    src: imageProduct,
    title: 'image 1',
    thumbnails: [
      {
        src: imageThumbnail_1,
        title: 'thumbnail 1',
      },
      {
        src: imageThumbnail_2,
        title: 'thumbnail 2',
      },
      {
        src: imageThumbnail_3,
        title: 'thumbnail 3',
      },
      {
        src: imageThumbnail_4,
        title: 'thumbnail 4',
      },
    ],
    slides: [
      {
        src: imageProduct,
        title: 'Image 1',
      },
      {
        src: imageProduct_2,
        title: 'Image 2',
      },
      {
        src: imageProduct_3,
        title: 'thumbnail 3',
      },
      {
        src: imageProduct_4,
        title: 'thumbnail 4',
      },
    ],
  },
};
