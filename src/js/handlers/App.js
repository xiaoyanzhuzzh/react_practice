var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

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
    render() {
        return (
            <div id="nav">
              <ul>
                <li><Link className="link" to="/home">Home</Link></li>
                <li><Link className="link" to="/item">Item</Link></li>
              </ul>
                <RouteHandler />
            </div>
        )
    }
});
