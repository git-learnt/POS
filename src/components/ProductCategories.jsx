import React from 'react';

const img = [
  'https://themes.woocommerce.com/stationery/wp-content/uploads/sites/96/2016/04/art_supplies1.jpg?w=569&h=378&crop=1',
  'https://themes.woocommerce.com/stationery/wp-content/uploads/sites/96/2016/04/art_supplies1.jpg?w=569&h=378&crop=1',
  'https://themes.woocommerce.com/stationery/wp-content/uploads/sites/96/2016/04/art_supplies1.jpg?w=569&h=378&crop=1',
];
const ProductCategories = () => (
  <section className="storefront-product-section storefront-product-categories">
    <h2 className="section-title">
      <span>
        Product Categories
      </span>
    </h2>
    <div>
      <ul className="products">
        {
          img.map((imgUrl, i) => (
            <li key={i.toString()}>
              <a href="/">
                <img
                  src={imgUrl}
                  alt="product-preview"
                  className="product-category-img"
                />
                <section className="category-title">
                  <h2 className="test">
                    Art supplies
                  </h2>
                  {/* <mark>6</mark> */}
                </section>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
    <style jsx>
      {`
        .storefront-product-section .section-title {
          text-transform: uppercase;
          color: #404040;
          font-size: 1.2em;
          text-align: center;
          margin-top: 2.25em;
        }
        .products {
          display: flex;
          justify-content: center;
        }
        .products > li {
          width: 30%;
          list-style: none;
          position: relative;
          max-width: 20em;
          margin-right: 3em;
        }
        .products > li > a {
          text-decoration: none;
        }
        .product-category-img {
          max-width: 100%;
        }
        .category-title {
          background: #1c4e86;
          text-align: center;
          color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          bottom: auto;
          transform: translate(-50%,-50%);
          white-space: nowrap;
          width: auto;
          padding: 0 1em;
          opacity: 0;
     
        }
        .category-title > h2 {
          font-size: 1.25em;
          line-height: 0.25; 
        }
        .products > li:hover {
          opacity: 1;
        }
     
      `}
    </style>
  </section>
);

export default ProductCategories;
