let ImageFlipper = React.createClass({
    componentWillMount() {
        this._interval = setInterval(() => {
            // TODO refresh the images
        }, 3000);
    },
    componentWillUnmount() {
        clearInterval(this._interval);
    },
    render() {
        return (
            <div className='row' data-eta='image-flipper'>
                <div className='col-md-10 col-md-offset-1'>
                    <img data-eta='flipper-left' src='http://dummyimage.com/800x800/6e6e6e/ababab&text=Image+de+gauche'/>
                    <img data-eta='flipper-right' src='http://dummyimage.com/800x800/6e6e6e/ababab&text=Image+de+droite'/>
                </div>
            </div>
        );
    }
});

module.exports = ImageFlipper;
