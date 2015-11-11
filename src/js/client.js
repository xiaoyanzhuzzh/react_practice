'use strict';
var React = require('react');
var Router = require('react-router');
var getRoutes = require('./routes');
var fetchData = require('./utils/fetchData');
var { EventEmitter } = require('events');

var loadingEvents = new EventEmitter();

var renderState = {
    element: document.getElementById('app'),
    Handler: null,
    routerState: null
};

var render = function(){
    var { element, Handler, routerState } = renderState;
    loadingEvents.emit('start');
    fetchData(routerState).then((data) => {
        loadingEvents.emit('end');
        React.render(<Handler data={data} loadingEvents={loadingEvents} />, element);
    });
};

Router.run(getRoutes, Router.HistoryLocation, function(Handler, routerState) {
    renderState.Handler = Handler;
    renderState.routerState = routerState;
    render();
});