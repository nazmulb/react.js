import React, {Component} from 'react';

class App extends Component {
    render() {
        var i = 1;
        var myStyle = {
            fontSize: 50,
            color: '#FF0000'
        }
        return (
            <div>
                <h1>Header {1+1}</h1>
                {/* Content Start */}
                <h2>Content</h2>
                {/* Content End */}
                <p style={myStyle} data-phone-format="xxx-xxx-xxxx">This is the content!!! {i==1 ? 'True!' : 'False'}</p>
            </div>
        );
    }
}

export default App;