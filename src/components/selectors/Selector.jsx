import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

const Selector = (props) => {
    function renderOptions() {
        return props.values.map((value, index) => {
            return (
                <MenuItem key={index} onClick={() => props.handleOnChange(value)}>
                    {value}
                </MenuItem>
            )
        });
    }

    return (
        <div className="selector">
            <label>
                {props.selectorName}:
                <SplitButton
                    title={props.selectedValue}
                    bsStyle="default"
                    onClick={() => props.handleOnChange(props.selectedValue)}
                    id={`drop-down-${props.selectorName}`}
                >
                    {renderOptions()}
                </SplitButton>
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
