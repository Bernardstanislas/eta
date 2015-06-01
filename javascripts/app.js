(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/index.js":[function(require,module,exports){
'use strict';

var Introduction = require('views/introduction');
var Home = require('views/home');

React.render(React.createElement(Introduction), window.document.getElementById('page'));
setTimeout(function () {
    React.render(React.createElement(Home), window.document.getElementById('page'));
}, 3000);

},{"views/home":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home.jsx","views/introduction":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/introduction/index.js"}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/header/index.js":[function(require,module,exports){
"use strict";

var Header = React.createClass({ displayName: "Header",
    render: function render() {
        return React.createElement("div", { "data-eta": "header", className: "container" }, React.createElement("div", { className: "row" }, ["Projets", "Agence", "Contact"].map(function (onglet) {
            return React.createElement("div", { className: "col-md-4" }, onglet);
        })));
    }
});

module.exports = Header;

},{}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/home.jsx":[function(require,module,exports){
"use strict";

var Header = require("views/header");

var Home = React.createClass({ displayName: "Home",
    render: function render() {
        return React.createElement("div", { className: "page" }, React.createElement(Header, null));
    }
});

module.exports = Home;

},{"views/header":"/Users/stan/Documents/Info/Projets/Eta/site/src/views/header/index.js"}],"/Users/stan/Documents/Info/Projets/Eta/site/src/views/introduction/index.js":[function(require,module,exports){
"use strict";

var Introduction = React.createClass({ displayName: "Introduction",
    render: function render() {
        return React.createElement("div", { className: "introduction animatedIntroduction" }, "ETA");
    }
});

module.exports = Introduction;

},{}]},{},["./src/index.js"]);
