import React from 'react';

const FeaturedSelector = ({current, switchView}) => {
  const choices = ["Recent", "Top Rated", "On Sale", "Deals"];
  const propertyName = ["recent", "topRated", "onSale", "deals"];
  return (
    <div id='featured-selector-container'>
      {choices.map((choice, i) => (
        <button
          key={`featured-button-${i}`}
          id={`${propertyName[i]}-button`}
          className={current === propertyName[i] ? 'selected-button featured-selector' : 'not-selected-button featured-selector'}
          type='button'
          onClick={() => switchView(propertyName[i])}
        >
          {choice}
        </button>
      ))}
      <style > {`
        #featured-selector-container {
          display: flex;
          justify-content: center;
        }
        .selected-button {
          color: lightblue;
        }
        .featured-selector {
          margin: 1em;
          border-radius: 5px;
        }
      `}</style>
  </div>)
};

export default FeaturedSelector;

