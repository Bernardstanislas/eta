let Projects = React.createClass({
    displayName: 'Projects',
    style: {
        title: {
            fontSize: '2em'
        },
        gallery: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        thumbnail: {
            width: '200px',
            margin: '5px'
        }
    },
    render() {
        let fakeArray = [];
        for (let i = 0; i < 50; i++) {
            fakeArray[i] = 'dummy';
        }
        let {style} = this;
        return (
            <div>
                <h1 style={style.title}>Projets réalisés</h1>
                <div style={style.gallery}>
                    {fakeArray.map(() => {
                        return (
                            <div style={style.thumbnail}>
                                <img src='http://dummyimage.com/200x150/6e6e6e/ababab&text=Projet' style={style.image}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Projects;
