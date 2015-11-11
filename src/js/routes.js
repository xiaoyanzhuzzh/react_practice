'use strict';
var React = require('react');
var { DefaultRoute, Route, NotFoundRoute } = require('react-router');
var {App, Home, NotFound} = require('./loadHandlers');

module.exports = function(){

    return [
        <Route name="root" path="/" handler={App}>
            <DefaultRoute handler={Home} />
            <Route name="home" path="/" handler={Home} />
        </Route>,
        <NotFoundRoute name="not-found" handler={NotFound}/>
    ];
};