import React from 'react';
import App from '../src/App';
import Featured from '../src/components/Featured';
import { mount, render } from 'enzyme';
import exampleData from '../src/exampleData.js';

describe('<Featured />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should render on the homepage', () => {
    expect(wrapper.find('#featured-container').length).toBe(1);
  });

  // it('should change view when a different featured set is chosen', () => {
  //   const featuredWrapper = mount(<Featured featuredData={exampleData}/>);
  //
  //
  // })
});
