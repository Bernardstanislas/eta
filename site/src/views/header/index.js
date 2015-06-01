let Link = ReactRouter.Link;

let Header = React.createClass({
    render() {
        return (
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
        );
    }
});

module.exports = Header;