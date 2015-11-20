'use strict';
jest.dontMock('../../../src/js/components/Item');
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Item = require('../../../src/js/components/Item');

describe('Item Handler', () => {
    it('changes the text after click', () => {
        var currentItem = {
            id: 1, name: '菠萝', price: 12.0, unit: '个', category: '水果', number: 4
        };

        var item = TestUtils.renderIntoDocument(
            <Item item={currentItem} />
        );
        console.log(item);

    });

});
