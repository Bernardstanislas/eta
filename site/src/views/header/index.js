let Link = ReactRouter.Link;

let Header = React.createClass({
    displayName: 'Header',
    style: {
        container: {
            padding: '0'
        },
        background: {
            backgroundImage: 'url("../images/header.jpg")',
            backgroundSize: 'cover',
            backgroundPositionY: '20%',
            height: '200px',
            width: '100%'
        },
        brand: {
            marginLeft: '20%',
            fontFamily: '"Roboto", sans-serif',
            paddingTop: '20px',
            color: 'white',
            fontSize: '8em'
        },
        menu: {
            backgroundColor: '#00838F',
            display: 'flex',
            padding: '10px 0 10px 20%'
        },
        linkBox: {
            padding: '10px',
            fontSize: '1.5em',
            marginRight: '20px'
        },
        linkText: {
            color: 'white',
            textDecoration: 'none'
        },
        activeLink: {
            color: '#00538C',
            textDecoration: 'none'
        }
    },
    render() {
        let {style} = this;
        return (
            <div style={style.container}>
                <div style={style.background}>
                    <div style={style.brand}>
                        ETA
                    </div>
                </div>
                <div style={style.menu}>
                    {['Accueil', 'Projets', 'Agence', 'Contact'].map((tab) => {
                        return (
                            <div className='col-md-2 text-center' key={tab} style={style.linkBox}>
                                <Link activeStyle={style.activeLink} style={style.linkText} to={tab}>{tab}</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Header;
