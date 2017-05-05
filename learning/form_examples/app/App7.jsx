import React from 'react';

class FancyBorder extends React.Component {
    render() {
        return (
            <div className={'FancyBorder FancyBorder-' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

class Dialog extends React.Component {
    render() {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {this.props.title}
                </h1>
                <p className="Dialog-message">
                    {this.props.message}
                </p>
                {this.props.children}
            </FancyBorder>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={(e) => this.handleSignUp(e)}>Sign Me Up!</button>
            </Dialog>
        );
    }
}

export default App;