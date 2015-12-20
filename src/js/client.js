'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, Router.HashLocation, function(Root){
    ReactDOM.render(<Root />, document.getElementById('itemList'));
});
