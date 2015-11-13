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
          <div>
            <div id="nav">
              <ul>
                <li><Link className="link" to="/">慧小猪的商店</Link></li>
                <li><Link className="link" to="/home">主页</Link></li>
                <li><Link className="link" to="/item">商品管理</Link></li>
              </ul>
            </div>
            <div>
              <RouteHandler />
            </div>
          </div>
        )
    }
});
