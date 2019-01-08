import React from 'react';
import Featured from './components/Featured';
import exampleData from './exampleData';

const App = () => (
  <div id='shell'>
    <Featured featuredData={exampleData} />
  </div>
);

export default App;



