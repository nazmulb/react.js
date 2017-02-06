import React from 'react';

let Count = ({count, onInc, onDec}) => (
    <div>
        <label>{count}</label> {' '}
        <button onClick={onInc}>+</button>  {' '}
        <button onClick={onDec}>-</button>
    </div>
);

export default Count;