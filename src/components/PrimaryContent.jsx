import React from 'react';

const PrimaryContent = () => (
  <section className="storefront-product-section">
    <div className="home-page-primary-content">
      <div className="sph-inner-wrapper">
        <h1>
          <span className="sph-inner-main-msg">Back to School</span>
        </h1>
        <div className="sph-inner-wrapper-center">
          <p className="promotion-msg">
            Get early bird deals on our new collection!
          </p>
          <p className="call-to-action">
            <a href="/"><button className="button-added-to-cart" type="button">Go Shopping</button></a>
          </p>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .storefront-product-section {
          margin:0 10%;
        }
        .home-page-primary-content {
          background-color: rgb(44, 45, 51);
          color: white;
          display: flex;
          justify-content: center;
          padding: 8em 5em;
        }
        .sph-inner-wrapper {
        
        }
        .sph-inner-wrapper > h1 {
          display: flex;
          justify-content: center;
        }
        .sph-inner-main-msg {
          background-color: #1c4e86;
          padding: 0.15em 0.6em;
          font-size: 1.75em;
        }
        .promotion-msg {
          background-color: #1c4e86;
          font-size: 1.6em;
          padding: .532em 1.063em;
        }
        .call-to-action {
          background-color: transparent;
          text-align: center;
        }
        .button-added-to-cart {
          padding: .898em 1.6em;
          border-radius: 3px;
          font-weight: 700;
          font-family: "Karla",sans-serif;
          text-transform: uppercase;
          border: 0;
          background-color: #fb3241;
          color: #ffffff;
          cursor: pointer;
        } 
      `}
    </style>
  </section>
);

export default PrimaryContent;
