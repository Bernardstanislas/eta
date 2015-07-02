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
    displayName: 'Application',
    style: {
        page: {
            height: '100%',
            padding: '50px 200px 0 200px'
        }
    },
    render() {
        let {style} = this;
        return (
            <div>
                <Header/>
                <div style={style.page}>
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

let routes = (
    <Route handler={App} name='App' path='/'>
        <Route handler={Home} name='Accueil'/>
        <Route handler={Projects} name='Projets'/>
        <Route handler={Agency} name='Agence'/>
        <Route handler={Contact} name='Contact'/>
        <Redirect from='/' to='Accueil'/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.body);
});

module.exports = App;
