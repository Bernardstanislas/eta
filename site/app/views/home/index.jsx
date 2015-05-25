/**
 * The Home page component
 */
let HomePage = React.createClass({
    /**
     * Render the component
     * @returns {XML} the rendered HTML
     */
    render: function renderHomeView() {
        return (
            <div className='home'>
                <h1>Home page</h1>
            </div>
        );
    }
});

module.exports = HomePage;
