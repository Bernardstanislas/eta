let ImageFlipper = React.createClass({
    displayName: 'ImageFlipper',
    componentWillMount() {
        this._interval = setInterval(() => {
            // TODO refresh the images
        }, 3000);
    },
    componentWillUnmount() {
        clearInterval(this._interval);
    },
    style: {
        flipper: {
            display: 'flex',
            justifyContent: 'center'
        },
        image: {
            width: '500px',
            margin: '0 50px 0 50px'
        }
    },
    render() {
        let {style} = this;
        return (
            <div style={style.flipper}>
                <img src='http://dummyimage.com/500x800/6e6e6e/ababab&text=Image+de+gauche' style={style.image}/>
                <img src='http://dummyimage.com/500x800/6e6e6e/ababab&text=Image+de+droite' style={style.image}/>
            </div>
        );
    }
});

module.exports = ImageFlipper;
