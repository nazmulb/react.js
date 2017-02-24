import React from 'react';

class App extends React.Component {
    getChildContext() {
        return {color: "green"};
    }
    render() {
        return (
            <div>
                <Message text="Test message" />
            </div>
        );
    }
}

App.childContextTypes = {
    color: React.PropTypes.string
};

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: React.PropTypes.string
};

export default App;