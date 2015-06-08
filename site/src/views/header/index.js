let Link = ReactRouter.Link;

let Header = React.createClass({
    render() {
        return (
            <div className='container-fluid' data-eta='header'>
                <div data-eta='top'>
                    <div className='container'>
                        <div data-eta='brand'>
                            ETA
                        </div>
                    </div>
                </div>
                <div data-eta='menu'>
                    <div className='container'>
                        <div className='row'>
                            {['Accueil', 'Projets', 'Agence', 'Contact'].map((tab) => {
                                return (
                                    <div className='col-md-2 text-center' data-eta='menu-link' key={tab}>
                                        <Link to={tab}>{tab}</Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;