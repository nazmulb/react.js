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
                <Content myDataProp={this.state.data} updateStateProp={this.updateState}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
                <br/><br/>
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
}

export default App;