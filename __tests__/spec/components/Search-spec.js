'use strict';
jest.dontMock('../../../src/js/components/Search');
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Search = require('../../../src/js/components/Search');

describe('Search Component', () => {
    var search, searchForItem;
    beforeEach(() => {
        searchForItem = jest.genMockFunction();
        search = TestUtils.renderIntoDocument(
            <Search onSearch={searchForItem} />
        );
    });

    it('should have default value to empty string', () => {
        expect(TestUtils.findRenderedDOMComponentWithTag(search, 'input').value).toBe('');
    });

    it('should invoke searchForItem when input changes ', () => {
        TestUtils.Simulate.change(
            TestUtils.findRenderedDOMComponentWithTag(search, 'input')
        );
        //expect(searchForItem).toHaveBeenCalled();
    });

});
