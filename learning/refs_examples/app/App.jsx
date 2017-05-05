import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data: 'Nazmul'
        }

        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    componentDidMount() {
        this.textInput.focus();
    }

    updateState() {
        this.setState({data: this.textInput.value});
    }

    clearInput() {
        this.setState({data: ''});
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.data}
                    onChange={this.updateState}
                    ref={(input) => this.textInput = input} />
                <button onClick={this.clearInput}>Clear</button>
                <br/><br/>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default App;