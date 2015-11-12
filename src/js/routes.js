'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./handlers/App');
var Home = require('./handlers/Home');
var Items = require('./handlers/Items');
var ItemDetails = require('./handlers/ItemDetails');

module.exports =
    <Route handler={App}>
        <Route name="home" handler={Home} />
        <Route name="items" handler={Items}>
          <Route name="/:itemId" handler={ItemDetails} />
        </Route>
    </Route>;
