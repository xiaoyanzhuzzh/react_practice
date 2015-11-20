'use strict';
jest.dontMock('../../../src/js/components/Item');
var React = require('react');
var ReactDOM= require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Item = require('../../../src/js/components/Item');

describe('Item Component', function() {
    it('should contain all item data', function() {
        var currentItem = {
            id: 1, name: '菠萝', price: 12.0, unit: '个', category: '水果', number: 4
        };
        var item = TestUtils.renderIntoDocument(
            <Item key={currentItem.id} item={currentItem} />
        );
        var itemNode = TestUtils.findReactNodeByID(currentItem.id);
        expect(itemNode.textContent).contains('1');
        expect(itemNode.textContent).contains('菠萝');
        expect(itemNode.textContent).contains('12.0');
        expect(itemNode.textContent).contains('个');
        expect(itemNode.textContent).contains('水果');
        expect(itemNode.textContent).contains('4');
    });
});
