let Header = React.createClass({
    render() {
        return (
            <div data-eta='header' className='container'>
                <div className='row'>
                    {['Projets', 'Agence', 'Contact'].map((onglet) => {
                        return (
                            <div className='col-md-4'>
                                {onglet}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Header;