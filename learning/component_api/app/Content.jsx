import React from 'react';

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
        console.log('Component is Rendering!');
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default Content;