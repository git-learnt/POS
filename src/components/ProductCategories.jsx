import React from 'react';

const sampleProductData = [
  {
    imgPreview: 'https://themes.woocommerce.com/stationery/wp-content/uploads/sites/96/2016/04/art_supplies1.jpg?w=569&h=378&crop=1',
    productCategory: 'Art Supplies',
  },
  {
    imgPreview: 'https://themes.woocommerce.com/stationery/wp-content/uploads/sites/96/2016/04/notebooks.jpg?w=567&h=378&crop=1',
    productCategory: 'Notebooks',
  },
  {
    imgPreview: 'https://themes.woocommerce.com/stationery/wp-content/uploads/sites/96/2016/04/office_basics.jpg?w=566&h=377&crop=1',
    productCategory: 'Office Basics',
  },
];
const ProductCategories = () => (
  <section className="storefront-product-section storefront-product-categories">
    <h2 className="section-title">
      <span>
        Product Categories
      </span>
    </h2>
    <div className="products-preview-wrapper">
      <ul className="products">
        {
          sampleProductData.map((product, i) => (
            <li className="products-category-preview" key={i.toString()}>
              <a href="/">
                <img
                  src={product.imgPreview}
                  alt="product-preview"
                  className="product-category-img"
                />
                <section className="category-title">
                  <h2 className="test">
                    {product.productCategory}
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
        .products-preview-wrapper {
          margin-top: 2em;
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
        .section-title > span {
          font-size: 0.9em;
          letter-spacing: .5px;
          font-family: "Karla",sans-serif;
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
          display: none;
        }
        .category-title > h2 {
          font-size: 1.1em;
          line-height: 0.35;
          text-transform: uppercase;
        }
        .products-category-preview:hover .category-title {
          display: block;
        }
      `}
    </style>
  </section>
);

export default ProductCategories;
