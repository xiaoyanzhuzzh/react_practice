var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

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
            <div>
                <Link to="/home">Home</Link>
                <Link to="/itemDetails">ItemDetails</Link>
            </div>
        )
    }
});
