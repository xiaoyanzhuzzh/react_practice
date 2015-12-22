'use strict';
jest.dontMock('../../../src/js/components/ItemList');
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Item from '../../../src/js/components/Item'

const ItemList = require('../../../src/js/components/ItemList');

describe('ItemList Component', () => {
    var items, itemList;
    beforeEach(() => {
        items = [
            {id: 1, name: '菠萝', price: 12.0, unit: '个', category: '水果', number: 4, image: '/image/xiaozhu1.png'}
        ];

        itemList = TestUtils.renderIntoDocument(
            <ItemList items={items} />
        );
    });

    it('should have 1 item', () => {
        expect(TestUtils.scryRenderedComponentsWithType(itemList, Item).length).toBe(1);
    });
});
