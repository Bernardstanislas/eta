let Introduction = require('views/introduction');

React.render(React.createElement(Introduction), window.document.getElementById('page'));
setTimeout(() => {
    require('views/app');
}, 3000);
