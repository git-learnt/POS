import React from 'react';
import PrimaryContent from './components/PrimaryContent';

const App = () => (
  <div className="main-wrapper">
    <PrimaryContent />
    <style jsx>
      {`
        .main-wrapper {
          margin: 0 15%;
        }
      `}
    </style>
  </div>

);

export default App;
