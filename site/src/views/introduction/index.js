let Introduction = React.createClass({
    displayName: 'Introduction',
    style: {
        WebkitAnimationName: 'etaHome',
        animationName: 'etaHome',
        WebkitAnimationDuration: '3s',
        animationDuration: '3s',
        opacity: '0',
        fontSize: '40vh',
        textAlign: 'center'
    },
    render() {
        let {style} = this;
        return (
            <div style={style}>ETA</div>
        );
    }
});

module.exports = Introduction;
