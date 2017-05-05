import React from 'react';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data: 'Initial Data...'
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState} />
                <br/><br/>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default App;