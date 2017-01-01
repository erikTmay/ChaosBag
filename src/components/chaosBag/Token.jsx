import React from 'react';
import {Button} from 'react-bootstrap';

import './token.css';

const Token = (props) => {
    return (
        <div className="token">
            <div className="token-image-wrapper">
                <img src={props.imagePath} alt={props.type} />
            </div>
            <div  className="amount-change-wrapper">
                <Button bsSize="xsmall" onClick={() => props.setAmount(props.type, props.amount+1)}>+</Button>
                <p>{props.amount}</p>
                <Button bsSize="xsmall" onClick={() => props.setAmount(props.type, props.amount-1)}>-</Button>
            </div>
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
