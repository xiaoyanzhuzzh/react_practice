'use strict';
var React = require('react');
var ItemPage = require('../components/ItemPage.js');

module.exports = React.createClass({
    displayName: "ItemPage",
    statics: {
        metaData() {
            return {
                title: '慧小猪的网上商城',
                description: '吃货的世界'
            };
        }
    },
    render() {
        return (
            <div>
                <ItemPage />
            </div>

        );
    }
});
