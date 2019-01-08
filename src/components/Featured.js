import React, { useState } from 'react';
import ProductPreview from "./ProductPreview";
import FeaturedSelector from './FeaturedSelector';

const Featured = ({featuredData}) => {
  const [currentView, setCurrentView] = useState('recent');

  return (
    <div
      id='featured-container'
    >
      <FeaturedSelector
        view={currentView}
        switchView={setCurrentView}
      />
      <div id='previews-container'>
        {featuredData[currentView].map((item, i) => (
          <ProductPreview
            key={`preview-${i}`}
            productTitle={item.title}
            productPrice={item.price}
            previewImgUrl={item.imgUrl}
          />
        ))}
      </div>
      <style >{`
        #previews-container {
          display: flex;
          justify-content: space-between;
          margin: 2em;
        }
        #featured-container {
          width: 48em;
        }
      `}</style>
    </div>)

};

export default Featured;
