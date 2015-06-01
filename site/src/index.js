let Introduction = require('views/introduction');
let Home = require('views/home');

React.render(React.createElement(Introduction), window.document.getElementById('page'));
setTimeout(() => {
    React.render(React.createElement(Home), window.document.getElementById('page'));
}, 3000);
