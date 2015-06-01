let Introduction = require('views/introduction');
//let App = require('views/app');

React.render(React.createElement(Introduction), window.document.getElementById('page'));
setTimeout(() => {
    //React.render(React.createElement(App), window.document.getElementById('page'));
    require('views/app');
}, 3000);
