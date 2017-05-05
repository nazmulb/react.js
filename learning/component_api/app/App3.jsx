import React from 'react';
import Content from './Content.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this);

        console.log('Component construct');
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

export default App;