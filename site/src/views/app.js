let Router = ReactRouter;

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;


let Header = require('views/header');
let Home = require('views/home');
let Projects = require('views/projects');
let Agency = require('views/agency');
let Contact = require('views/contact');

let App = React.createClass({
    render() {
        return (
            <div className='app'>
                <div data-eta='header'>
                    <Header/>
                </div>
                <div data-eta='page-container' className='container'>
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

let routes = (
    <Route name="Accueil" path="/" handler={App}>
        <Route name="Projets" handler={Projects}/>
        <Route name="Agence" handler={Agency}/>
        <Route name="Contact" handler={Contact}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler/>, document.body);
});

module.exports = App;