import React from 'react';
import './token.css';

const Token = (props) => {
    return (
        <div className="token">
            <img src={props.imagePath} alt={props.type} />
            <button onClick={() => props.setAmount(props.type, props.amount+1)}>+</button>
            <p>{props.amount}</p>
            <button onClick={() => props.setAmount(props.type, props.amount-1)}>-</button>
        </div>
    );
}

Token.propTypes = {
    type: React.PropTypes.string.isRequired,
    imagePath: React.PropTypes.string.isRequired,
    setAmount: React.PropTypes.func.isRequired,
    amount: React.PropTypes.number.isRequired
};

export default Token;
