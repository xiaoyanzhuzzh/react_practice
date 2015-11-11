var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var { fetchingData } = require('../util/appEvents');

module.exports = React.createClass({
    displayName: "App",
    mixins: [ Router.State ],
    statics: {
        metaData ( ) {
            return {
              title: '慧小猪的网上商城',
              description: '吃货的世界'
            };
        }
    },
    render: function() {
        return (
            <div>
                <RouteHandler {...this.props} />
            </div>
        );
    }
});
