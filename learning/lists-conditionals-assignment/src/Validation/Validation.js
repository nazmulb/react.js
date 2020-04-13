import React from 'react';

const Validation = (props) => {
    let msg = props.inputLength > 5 ? "text long enough" : "Text too short";

    return (
        <p>{msg}</p>
    );
}

export default Validation;