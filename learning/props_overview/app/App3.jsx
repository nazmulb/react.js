import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.color);

        this.state = {
            header: "This is my header",
            content: "This is my content"
        }
    }

    render() {
        return (
            <div>
                <Header headerProp={this.state.header} />
                <Content contentProp={this.state.content} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.contentProp}</h2>
            </div>
        );
    }
}

export default App;