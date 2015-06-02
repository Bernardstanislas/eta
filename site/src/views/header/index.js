let Link = ReactRouter.Link;

let Header = React.createClass({
    render() {
        return (
            <div data-eta='header' className='container'>
                <div className='row'>
                    {['Accueil', 'Projets', 'Agence', 'Contact'].map((onglet) => {
                        return (
                            <div className='col-md-3 text-center' key={onglet}>
                                <Link to={onglet}>{onglet}</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Header;