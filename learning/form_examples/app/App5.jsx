import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const value = this.state.value;
        return (
            <fieldset>
                <legend>
                    <input value={value} onChange={this.handleChange} />
                    <BoilingVerdict celsius={parseFloat(value)} />
                </legend>
            </fieldset>
        );
    }
}

class BoilingVerdict extends React.Component {
    render() {
        return (
            <div>
                {this.props.celsius>=100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>}
            </div>
        )
    }
}

export default App;