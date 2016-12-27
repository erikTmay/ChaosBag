import React from 'react';

const Selector = (props) => {
    function renderOptions() {
        return props.values.map((value, index) => {
            return (
                <option key={index} value={value}>
                    {value}
                </option>
            );
        })
    }

    return (
        <div>
            <label>
                {props.selectorName}
                <select value={props.selectedValue} onChange={(event) => props.handleOnChange(event.target.value)}>
                    {renderOptions()}
                </select>
            </label>
        </div>
    );
}

Selector.propTypes = {
    selectorName: React.PropTypes.string.isRequired,
    selectedValue: React.PropTypes.string.isRequired,
    handleOnChange: React.PropTypes.func.isRequired,
    values: React.PropTypes.array.isRequired
};

export default Selector;
