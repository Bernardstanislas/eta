let Router = ReactRouter;

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let Home = require('views/home');
let Projects = require('views/projects');
let Agency = require('views/agency');
let Contact = require('views/contact');

let App = React.createClass({
    render() {
        return (
            <div className='page'>
                <div data-eta='header' className='container'>
                    <div className='row'>
                        {['Accueil', 'Projets', 'Agence', 'Contact'].map((onglet) => {
                            return (
                                <div className='col-md-4'>
                                    <Link to={onglet}>{onglet}</Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="Accueil" path="/" handler={Home}>
        <Route name="Projets" handler={Projects}/>
        <Route name="Agence" handler={Agency}/>
        <Route name="Contact" handler={Contact}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});

module.exports = App;