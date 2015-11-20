'use strict';
jest.dontMock('../CheckboxWithLabel');
import React from 'react';
import TestUtils from 'react/addons';

const App = require('../../src/handlers/App');

describe('App Handler', () => {
  it('changes the text after click', () => {
    var app = TestUtils.renderIntoDocument(
      <App />
    );
    var appNode = ReactDOM.findDOMNode(app);
    expect(appNode.textContent).toEqual('Off');
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(app, 'a')
    );
    expect(appNode.textContent).toEqual('On');
  });

});