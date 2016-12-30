import React from 'react';
import Token from './tokens/Token';
import constants from './../constants'
import './chaosBag.css';

const ChaosBag = (props) => {
    return (
        <div className="chaos-bag">
            <Token
                type={constants.TOKENS.PLUS_ONE.TYPE}
                imagePath={constants.TOKENS.PLUS_ONE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.plusOne}
                />
            <Token
                type={constants.TOKENS.ZERO.TYPE}
                imagePath={constants.TOKENS.ZERO.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.zero}
                />
            <Token
                type={constants.TOKENS.MINUS_ONE.TYPE}
                imagePath={constants.TOKENS.MINUS_ONE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.minusOne}
                />
            <Token
                type={constants.TOKENS.MINUS_TWO.TYPE}
                imagePath={constants.TOKENS.MINUS_TWO.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.minusTwo}
                />
            <Token
                type={constants.TOKENS.MINUS_THREE.TYPE}
                imagePath={constants.TOKENS.MINUS_THREE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.minusThree}
                />
            <Token
                type={constants.TOKENS.MINUS_FOUR.TYPE}
                imagePath={constants.TOKENS.MINUS_FOUR.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.minusFour}
                />
            <Token
                type={constants.TOKENS.MINUS_FIVE.TYPE}
                imagePath={constants.TOKENS.MINUS_FIVE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.minusFive}
                />
            <Token
                type={constants.TOKENS.MINUS_SIX.TYPE}
                imagePath={constants.TOKENS.MINUS_SIX.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.minusSix}
                />
            <Token
                type={constants.TOKENS.MINUS_SEVEN.TYPE}
                imagePath={constants.TOKENS.MINUS_SEVEN.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.minusSeven}
                />
            <Token
                type={constants.TOKENS.MINUS_EIGHT.TYPE}
                imagePath={constants.TOKENS.MINUS_EIGHT.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.minusEight}
                />
            <Token
                type={constants.TOKENS.SKULL.TYPE}
                imagePath={constants.TOKENS.SKULL.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.skull}
                />
            <Token
                type={constants.TOKENS.CULTIST.TYPE}
                imagePath={constants.TOKENS.CULTIST.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.cultist}
                />
            <Token
                type={constants.TOKENS.TABLET.TYPE}
                imagePath={constants.TOKENS.TABLET.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.tablet}
                />
            <Token
                type={constants.TOKENS.ELDER_THING.TYPE}
                imagePath={constants.TOKENS.ELDER_THING.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.elderThing}
                />
            <Token
                type={constants.TOKENS.TENTICLES.TYPE}
                imagePath={constants.TOKENS.TENTICLES.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.tenticles}
                />
            <Token
                type={constants.TOKENS.ELDER_SIGN.TYPE}
                imagePath={constants.TOKENS.ELDER_SIGN.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tokens.elderSign}
                />
        </div>
    );
}

ChaosBag.propTypes = {
    tokens: React.PropTypes.shape({
        plusOne: React.PropTypes.number.isRequired,
        zero: React.PropTypes.number.isRequired,
        minusOne: React.PropTypes.number.isRequired,
        minusTwo: React.PropTypes.number.isRequired,
        minusThree: React.PropTypes.number.isRequired,
        minusFour: React.PropTypes.number.isRequired,
        minusFive: React.PropTypes.number.isRequired,
        minusSix: React.PropTypes.number.isRequired,
        minusSeven: React.PropTypes.number.isRequired,
        minusEight: React.PropTypes.number.isRequired,
        skull: React.PropTypes.number.isRequired,
        cultist: React.PropTypes.number.isRequired,
        tablet: React.PropTypes.number.isRequired,
        elderThing: React.PropTypes.number.isRequired,
        tenticles: React.PropTypes.number.isRequired,
        elderSign: React.PropTypes.number.isRequired
    }).isRequired,
    onTokenAmountChange: React.PropTypes.func.isRequired
};

export default ChaosBag;
