import React from 'react';

const Picker = ({value, onChange, options}) => (
    <span>
        <h1>{value}</h1>
        <form>
            <select className="form-control picker" value={value} onChange={e=>onChange(e.target.value)}>
                {options.map( (option, i) =>
                    <option value={option} key={i}>
                        {option}
                    </option>
                )}
            </select>
        </form>
    </span>
);

Picker.propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired
    ).isRequired
};

export default Picker;