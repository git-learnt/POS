import React from 'react';

const ProductCategories = () => (
  <section className="storefront-product-section storefront-product-categories">
    <h2 className="section-title">
      <span>
        Product Categories
      </span>
    </h2>
    <div>
      <ul className="products">
        <li>
          <a href="/">
            <img
              src="https://themes.woocommerce.com/stationery/wp-content/uploads/sites/96/2016/04/art_supplies1.jpg?w=569&h=378&crop=1"
              alt="product-detail"
            >
            </img>
          </a>
        </li>
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
       .products > li {
         width: 30%;
       }
      `}
    </style>
  </section>
);

export default ProductCategories;
