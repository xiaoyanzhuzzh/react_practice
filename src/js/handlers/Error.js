'use strict';
var React = require('react');
var errorMessage,
    errorStatus;

module.exports = React.createClass({
    displayName: "Error",
    statics: {
        metaData() {
            return {
                title: '慧小猪的网上商城',
                description: '吃货的世界'
            };
        }
    },
    render() {
        if(this.props.status == 404 || !this.props.status) {
            errorStatus = "404";
            errorMessage = "哦，天哪.您访问的页面找不见";
        } else {
            errorStatus = "500";
            errorMessage = "哦，天哪.服务器异常";
        }
        return (
            <div>
                <h2>Error - {errorStatus}</h2>
                <p>{errorMessage}</p>
            </div>

        );
    }
});

