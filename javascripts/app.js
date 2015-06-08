(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/index.js":[function(require,module,exports){
'use strict';

var Introduction = require('views/introduction');
//let App = require('views/app');

React.render(React.createElement(Introduction), window.document.getElementById('page'));
setTimeout(function () {
    //React.render(React.createElement(App), window.document.getElementById('page'));
    require('views/app');
}, 3000);

},{"views/app":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/app.js","views/introduction":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/introduction/index.js"}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/agency/index.js":[function(require,module,exports){
"use strict";

var Agency = React.createClass({ displayName: "Agency",
    render: function render() {
        return React.createElement("div", { "data-eta": "agency" });
    }
});

module.exports = Agency;

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/app.js":[function(require,module,exports){
'use strict';

var Router = ReactRouter;

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;

var Header = require('views/header');
var Home = require('views/home');
var Projects = require('views/projects');
var Agency = require('views/agency');
var Contact = require('views/contact');

var App = React.createClass({ displayName: 'App',
    render: function render() {
        return React.createElement('div', { className: 'app' }, React.createElement('div', { 'data-eta': 'header' }, React.createElement(Header, null)), React.createElement('div', { 'data-eta': 'page-container', className: 'container-fluid' }, React.createElement(RouteHandler, null)));
    }
});

var routes = React.createElement(Route, { name: 'App', path: '/', handler: App }, React.createElement(Route, { name: 'Accueil', handler: Home }), React.createElement(Route, { name: 'Projets', handler: Projects }), React.createElement(Route, { name: 'Agence', handler: Agency }), React.createElement(Route, { name: 'Contact', handler: Contact }), React.createElement(Redirect, { from: '/', to: 'Accueil' }), React.createElement(DefaultRoute, { handler: Home }));

Router.run(routes, function (Handler) {
    React.render(React.createElement(Handler, null), document.body);
});

module.exports = App;

},{"views/agency":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/agency/index.js","views/contact":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/contact/index.js","views/header":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/header/index.js","views/home":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home/index.js","views/projects":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/projects/index.js"}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/contact/index.js":[function(require,module,exports){
"use strict";

var Contact = React.createClass({ displayName: "Contact",
    render: function render() {
        return React.createElement("div", { "data-eta": "contact" });
    }
});

module.exports = Contact;

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/header/index.js":[function(require,module,exports){
"use strict";

var Link = ReactRouter.Link;

var Header = React.createClass({ displayName: "Header",
    render: function render() {
        return React.createElement("div", { className: "container-fluid", "data-eta": "header" }, React.createElement("div", { "data-eta": "top" }, React.createElement("div", { className: "container" }, React.createElement("div", { "data-eta": "brand" }, "ETA"))), React.createElement("div", { "data-eta": "menu" }, React.createElement("div", { className: "container" }, React.createElement("div", { className: "row" }, ["Accueil", "Projets", "Agence", "Contact"].map(function (tab) {
            return React.createElement("div", { className: "col-md-2 text-center", "data-eta": "menu-link", key: tab }, React.createElement(Link, { to: tab }, tab));
        })))));
    }
});

module.exports = Header;

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home/image-flipper.js":[function(require,module,exports){
"use strict";

var ImageFlipper = React.createClass({ displayName: "ImageFlipper",
    componentWillMount: function componentWillMount() {
        this._interval = setInterval(function () {}, 3000);
    },
    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this._interval);
    },
    render: function render() {
        return React.createElement("div", { className: "row", "data-eta": "image-flipper" }, React.createElement("div", { className: "col-md-10 col-md-offset-1" }, React.createElement("img", { "data-eta": "flipper-left", src: "http://dummyimage.com/800x800/6e6e6e/ababab&text=Image+de+gauche" }), React.createElement("img", { "data-eta": "flipper-right", src: "http://dummyimage.com/800x800/6e6e6e/ababab&text=Image+de+droite" })));
    }
});

module.exports = ImageFlipper;

// TODO refresh the images

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home/index.js":[function(require,module,exports){
"use strict";

var ImageFlipper = require("./image-flipper");

var Home = React.createClass({ displayName: "Home",
    render: function render() {
        return React.createElement("div", { "data-eta": "home" }, React.createElement(ImageFlipper, null));
    }
});

module.exports = Home;

},{"./image-flipper":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home/image-flipper.js"}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/introduction/index.js":[function(require,module,exports){
"use strict";

var Introduction = React.createClass({ displayName: "Introduction",
    render: function render() {
        return React.createElement("div", { className: "introduction animatedIntroduction" }, "ETA");
    }
});

module.exports = Introduction;

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/projects/index.js":[function(require,module,exports){
"use strict";

var Projects = React.createClass({ displayName: "Projects",
    render: function render() {
        return React.createElement("div", { "data-eta": "projects" });
    }
});

module.exports = Projects;

},{}]},{},["./src/index.js"]);
