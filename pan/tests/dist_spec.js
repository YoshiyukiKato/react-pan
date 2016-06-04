import React from 'react';
import * as TestUtils from 'react/lib/ReactTestUtils'; 
import assert from 'power-assert';
import App from '../dist'; 

describe('App', () => {
  it('renders without problems', () => {
    let app = TestUtils.renderIntoDocument(<App/>);
    assert(app);
  });
});
