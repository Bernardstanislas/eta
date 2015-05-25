// Dependencies.
let Router = Backbone.Router;
let render = Focus.application.render;

// Views
let HomeView = require('views/home');

let AppRouter = Router.extend({
    routes: {
        '': 'home'
    },
    home: function renderHome() {
        console.info('Route: #HOME');
        render(HomeView, '.page', {});
    }
});

module.exports = new AppRouter();
