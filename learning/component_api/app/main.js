import React from 'react';
import ReactDOM from 'react-dom';
import App from './App3.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);