import React from 'react';
import AddToCart from './AddtoCart';

const ProductPreview = ({productTitle, productPrice, previewImgUrl}) => (
  <div className='product-preview-container'>
    <img
      className='product-preview-image'
      src={previewImgUrl}
      alt={`preview image for ${productTitle}`}
    />
    <div
      className='product-preview-title'
      data-test='product-title'
    >{productTitle}</div>
    <div className='product-preview-price'>
      {`$${productPrice.toLocaleString('en')}`}
    </div>
    <AddToCart />
      <style >{`
        .product-preview-image {
          width: 10em;
        }
        .product-preview-title {
          font-weight: 700;
        }
        .product-preview-price {

        }
        .product-preview-container {
          width: 12em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
  </div>
);

export default ProductPreview;
