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
                <div className='col-md-6 text-center' ref='left'>
                    <img src='http://dummyimage.com/400x800/6e6e6e/ababab&text=Image+de+gauche'/>
                </div>
                <div className='col-md-6 text-center' ref='right'>
                    <img src='http://dummyimage.com/400x800/6e6e6e/ababab&text=Image+de+droite'/>
                </div>
            </div>
        );
    }
});

module.exports = ImageFlipper;
