let ImageFlipper = React.createClass({
    componentWillMount() {
        this._interval = setInterval(() => {
            this.setState({
                randomIndex: this.state.randomIndex + 1
            });
        }, 3000);
    },
    componentWillUnmount() {
        clearInterval(this._interval);
    },
    render() {
        return (
            <div className='row'>
                <div className='col-md-6' ref='left'>
                    <img src='http://placehold.it/400x800'/>
                </div>
                <div className='col-md-6' ref='right'>
                    <img src='http://placehold.it/400x800'/>
                </div>
            </div>
        );
    }
});

module.exports = ImageFlipper;
