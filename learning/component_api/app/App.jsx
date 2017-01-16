import React from 'react';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data:[]
        }

        this.changeState = this.changeState.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    changeState() {
        var item = "Nazmul Basher ";
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({data: myArray});
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <button onClick={this.changeState}>SET STATE</button>
                <br/><br/>
                <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>State Array: {this.state.data}</h4>
                <h4>Random Number: {Math.random()}</h4>
            </div>
        );
    }
}

export default App;