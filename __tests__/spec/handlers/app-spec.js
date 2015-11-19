'use strict';
jest.dontMock('../../../src/js/handlers/App');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var App = require('../../../src/js/handlers/App');

describe('App Handler', function() {
    it('link to different page after click', function() {
        var app = <App />;
        console.log(app);
        var appNode = React.findDOMNode(app);
        expect(appNode.textContent).toEqual('Off');
        TestUtils.Simulate.click(
            TestUtils.findRenderedDOMComponentWithTag(app, 'a')
        );
        expect(appNode.textContent).toEqual('On');
    })
});
