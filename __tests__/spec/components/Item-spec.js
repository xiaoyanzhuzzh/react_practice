'use strict';
jest.dontMock('../../../src/js/components/Item');
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Item = require('../../../src/js/components/Item');

describe('Item Component', () => {
    it('displays one', () => {
        var currentItem = {
            id: 1, name: '菠萝', price: 12.0, unit: '个', category: '水果', number: 4
        };

        var item = TestUtils.renderIntoDocument(

            <Item key={currentItem.id} item={currentItem} />
        );
        expect(TestUtils.scryRenderedComponentsWithType(item, Item).length).toBe(1);
    });

});
