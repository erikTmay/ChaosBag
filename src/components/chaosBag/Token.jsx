import React from 'react';
import {Button} from 'react-bootstrap';
import imagePlusOne from './../../images/plusOne.png';
import './token.css';

const Token = (props) => {
    return (
        <div className="token">
            <img src={imagePlusOne} alt={props.type} />
            <Button bsSize="xsmall" onClick={() => props.setAmount(props.type, props.amount+1)}>+</Button>
            <p>{props.amount}</p>
            <Button bsSize="xsmall" onClick={() => props.setAmount(props.type, props.amount-1)}>-</Button>
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
