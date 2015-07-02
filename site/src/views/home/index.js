let ImageFlipper = require('./image-flipper');

let Home = React.createClass({
    displayName: 'Home',
    render() {
        return (
            <div>
                <ImageFlipper/>
            </div>
        );
    }
});

module.exports = Home;
