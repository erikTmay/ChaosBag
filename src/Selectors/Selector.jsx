import React from 'react';

class Selector extends React.Component {
    renderOptions() {
        return this.props.values.map((value, index) => {
            return (
                <option key={index} value={value}>
                    {value}
                </option>
            );
        })
    }
    render() {
        return (
            <div>
                <label>
                    {this.props.selectorName}
                    <select value={this.props.selectedValue} onChange={(event) => this.props.handleOnChange(event.target.value)}>
                        {this.renderOptions()}
                    </select>
                </label>
            </div>
        );
    }
}

Selector.propTypes = {
    selectorName: React.PropTypes.string.isRequired,
    selectedValue: React.PropTypes.string.isRequired,
    handleOnChange: React.PropTypes.func.isRequired,
    values: React.PropTypes.array.isRequired
};

export default Selector;