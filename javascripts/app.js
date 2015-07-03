(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/index.js":[function(require,module,exports){
'use strict';

var Introduction = require('views/introduction');

React.render(React.createElement(Introduction), window.document.getElementById('page'));
setTimeout(function () {
    require('views/app');
}, 4000);

},{"views/app":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/app.js","views/introduction":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/introduction/index.js"}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/agency/index.js":[function(require,module,exports){
"use strict";

var Agency = React.createClass({
    displayName: "Agency",
    render: function render() {
        return React.createElement("div", null);
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

var App = React.createClass({
    displayName: 'Application',
    style: {
        page: {
            height: '100%',
            padding: '100px 200px 0 200px'
        }
    },
    render: function render() {
        var style = this.style;

        return React.createElement('div', null, React.createElement(Header, null), React.createElement('div', { style: style.page }, React.createElement(RouteHandler, null)));
    }
});

var routes = React.createElement(Route, { handler: App, name: 'App', path: '/' }, React.createElement(Route, { handler: Home, name: 'Accueil' }), React.createElement(Route, { handler: Projects, name: 'Projets' }), React.createElement(Route, { handler: Agency, name: 'Agence' }), React.createElement(Route, { handler: Contact, name: 'Contact' }), React.createElement(Redirect, { from: '/', to: 'Accueil' }), React.createElement(DefaultRoute, { handler: Projects }));

Router.run(routes, function (Handler) {
    React.render(React.createElement(Handler, null), document.body);
});

module.exports = App;

},{"views/agency":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/agency/index.js","views/contact":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/contact/index.js","views/header":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/header/index.js","views/home":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home/index.js","views/projects":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/projects/index.js"}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/contact/index.js":[function(require,module,exports){
"use strict";

var Contact = React.createClass({
    displayName: "Contact",
    render: function render() {
        return React.createElement("div", null);
    }
});

module.exports = Contact;

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/header/index.js":[function(require,module,exports){
'use strict';

var Link = ReactRouter.Link;

var Header = React.createClass({
    displayName: 'Header',
    style: {
        container: {
            width: '1000px',
            position: 'fixed',
            padding: '0'
        },
        background: {
            // backgroundImage: 'url("./images/header.jpg")',
            // backgroundSize: 'cover',
            // backgroundPositionY: '20%',
            height: '50px',
            width: '100%'
        },
        brand: {
            marginLeft: '20%',
            marginTop: '10px',
            marginBottom: '20px',
            fontFamily: '"Roboto", sans-serif',
            paddingTop: '20px',
            color: 'grey',
            fontSize: '4em'
        },
        menu: {
            // backgroundColor: '#DDDDDD',
            paddingTop: '20px',
            display: 'flex',
            padding: '10px 0 10px 20%',
            marginTop: '20px'
        },
        linkBox: {
            padding: '10px',
            fontSize: '3em',
            marginRight: '20px'
        },
        linkText: {
            color: 'grey',
            textDecoration: 'none'
        },
        activeLink: {
            color: '#00538C',
            textDecoration: 'none'
        }
    },
    render: function render() {
        var style = this.style;

        return React.createElement('div', { style: style.container }, React.createElement('div', { style: style.background }, React.createElement('div', { style: style.brand }, 'Eric Thave Architecture')), React.createElement('div', { style: style.menu }, ['Projets', 'Agence', 'Contact'].map(function (tab) {
            return React.createElement('div', { className: 'col-md-2 text-center', key: tab, style: style.linkBox }, React.createElement(Link, { activeStyle: style.activeLink, style: style.linkText, to: tab }, tab));
        })));
    }
});

module.exports = Header;

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home/image-flipper.js":[function(require,module,exports){
'use strict';

var ImageFlipper = React.createClass({
    displayName: 'ImageFlipper',
    componentWillMount: function componentWillMount() {
        this._interval = setInterval(function () {}, 3000);
    },
    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this._interval);
    },
    style: {
        flipper: {
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'center'
        },
        image: {
            width: '500px' }
    },
    render: function render() {
        var style = this.style;

        return React.createElement('div', { style: style.flipper }, React.createElement('img', { src: 'http://lorempixel.com/500/800/city/', style: style.image }), React.createElement('img', { src: 'http://lorempixel.com/500/800/city/', style: style.image }));
    }
});

module.exports = ImageFlipper;

// TODO refresh the images

// margin: '0 50px 0 50px'

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home/index.js":[function(require,module,exports){
'use strict';

var ImageFlipper = require('./image-flipper');

var Home = React.createClass({
    displayName: 'Home',
    render: function render() {
        return React.createElement('div', null, React.createElement(ImageFlipper, null));
    }
});

module.exports = Home;

},{"./image-flipper":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home/image-flipper.js"}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/introduction/index.js":[function(require,module,exports){
'use strict';

var Introduction = React.createClass({
    displayName: 'Introduction',
    style: {
        container: {
            display: 'flex',
            flexFlow: 'vertical'
        },
        title: {
            WebkitAnimationName: 'etaHome',
            animationName: 'etaHome',
            WebkitAnimationDuration: '4s',
            animationDuration: '4s',
            opacity: '0',
            fontSize: '40vh',
            textAlign: 'center'
        }
    },
    render: function render() {
        var style = this.style;

        return React.createElement('div', { style: style.container }, React.createElement('div', { style: style.title }, 'ETA'));
    }
});

module.exports = Introduction;

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/projects/index.js":[function(require,module,exports){
'use strict';

var Projects = React.createClass({
    displayName: 'Projects',
    style: {
        title: {
            fontSize: '2em'
        },
        gallery: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        thumbnail: {
            margin: '5px'
        },
        categories: {
            marginTop: '50px',
            display: 'flex'
        },
        category: {
            margin: '10px',
            fontSize: '1.5em'
        }
    },
    render: function render() {
        var fakeArray = [];
        for (var i = 0; i < 150; i++) {
            fakeArray[i] = 250 + Math.round(Math.random() * 350);
        }
        var style = this.style;

        return React.createElement('div', null, React.createElement('div', { style: style.categories }, ['Décoration', 'Logemement', 'Tertiaire', 'Commerce', 'Maison', 'Aménagement urbain', 'Equipement'].map(function (category) {
            return React.createElement('div', { key: category, style: style.category }, category);
        })), React.createElement('div', { style: style.gallery }, fakeArray.map(function (width) {
            return React.createElement('div', { style: style.thumbnail }, React.createElement('img', { src: 'http://lorempixel.com/g/' + width + '/500/city/', style: style.image }));
        })));
    }
});

module.exports = Projects;

},{}]},{},["./src/index.js"]);
