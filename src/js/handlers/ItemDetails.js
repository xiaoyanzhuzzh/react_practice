'use strict';
var React = require('react');
module.exports = React.createClass({
    displayName: "ItemDetails",
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
                <h1>Item Details</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi dicta
                dignissimos earum eos esse impedit ipsum iste laboriosam numquam odio perspiciatis porro, quas sequi tempore
                vero vitae voluptates
            </div>

        );
    }
});

