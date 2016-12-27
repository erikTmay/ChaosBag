import React from 'react';
import './token.css';

class Token extends React.Component {
    render() {
        return (
            <div className="token">
                <img src={this.props.tokenImagePath} alt={this.props.tokenImageAlt} />
                <button onClick={() => this.props.setTokenAmount(this.props.amount+1)}>+</button>
                <p>{this.props.amount}</p>
                <button onClick={() => this.props.setTokenAmount(this.props.amount-1)}>-</button>
            </div>
        );
    }
}

Token.propTypes = {
    tokenImageAlt: React.PropTypes.string.isRequired,
    tokenImagePath: React.PropTypes.string.isRequired,
    setTokenAmount: React.PropTypes.func.isRequired,
    amount: React.PropTypes.number.isRequired
};

export default Token;
