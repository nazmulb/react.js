import React from 'react';

let Count = ({count, onInc, onDec}) => (
    <div>
        <label>{count}</label> {' '}
        <button onClick={onInc}>+</button>  {' '}
        <button onClick={onDec}>-</button>
    </div>
);

Count.propTypes = {
    count: React.PropTypes.number.isRequired,
    onInc: React.PropTypes.func.isRequired,
    onDec: React.PropTypes.func.isRequired
};

export default Count;