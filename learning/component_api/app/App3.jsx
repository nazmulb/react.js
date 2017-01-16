import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this)
    };

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }

    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component {

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {

        if(!Object.is(newProps.myNumber, this.props.myNumber)){
            console.log('Component SHOULD UPDATE!');
            return true;
        }

        console.log('Component SHOULDN\'T UPDATE!');
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default App;