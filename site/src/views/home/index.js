let ImageFlipper = require('./image-flipper');

let Home = React.createClass({
    render() {
        return (
            <div data-eta='home'>
                <ImageFlipper/>
            </div>
        );
    }
});

module.exports = Home;