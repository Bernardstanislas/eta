let Header = require('views/header');

let Home = React.createClass({
    render() {
        return (
            <div className='page'>
                <Header/>
            </div>
        );
    }
});

module.exports = Home;