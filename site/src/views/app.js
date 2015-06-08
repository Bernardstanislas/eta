let Router = ReactRouter;

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let Redirect = Router.Redirect;
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
                <div data-eta='page-container' className='container-fluid'>
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

let routes = (
    <Route name='App' path='/' handler={App}>
        <Route name='Accueil' handler={Home}/>
        <Route name='Projets' handler={Projects}/>
        <Route name='Agence' handler={Agency}/>
        <Route name='Contact' handler={Contact}/>
        <Redirect from="/" to="Accueil" />
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.body);
});

module.exports = App;