import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data: 'Nazmul'
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        let textInput = ReactDOM.findDOMNode(this.refs.myInput);
        this.setState({data: textInput.value});
    }

    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.updateState}
                    ref="myInput" />
                <br/><br/>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default App;