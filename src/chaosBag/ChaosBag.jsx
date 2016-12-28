import React from 'react';
import { connect } from 'react-redux';
import { changeTokenAmount } from './../actions/actions';
import Token from './tokens/Token';
import Constants from './../Constants'
import './ChaosBag.css';

const ChaosBag = (props) => {
    return (
        <div className="chaos-bag">
            <Token
                type={Constants.TOKENS.PLUS_ONE.TYPE}
                imagePath={Constants.TOKENS.PLUS_ONE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.plusOneAmount}
                />
            <Token
                type={Constants.TOKENS.ZERO.TYPE}
                imagePath={Constants.TOKENS.ZERO.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.zeroAmount}
                />
            <Token
                type={Constants.TOKENS.MINUS_ONE.TYPE}
                imagePath={Constants.TOKENS.MINUS_ONE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusOneAmount}
                />
            <Token
                type={Constants.TOKENS.MINUS_TWO.TYPE}
                imagePath={Constants.TOKENS.MINUS_TWO.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusTwoAmount}
                />
            <Token
                type={Constants.TOKENS.MINUS_THREE.TYPE}
                imagePath={Constants.TOKENS.MINUS_THREE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusThreeAmount}
                />
            <Token
                type={Constants.TOKENS.MINUS_FOUR.TYPE}
                imagePath={Constants.TOKENS.MINUS_FOUR.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusFourAmount}
                />
            <Token
                type={Constants.TOKENS.MINUS_FIVE.TYPE}
                imagePath={Constants.TOKENS.MINUS_FIVE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusFiveAmount}
                />
            <Token
                type={Constants.TOKENS.MINUS_SIX.TYPE}
                imagePath={Constants.TOKENS.MINUS_SIX.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusSixAmount}
                />
            <Token
                type={Constants.TOKENS.MINUS_SEVEN.TYPE}
                imagePath={Constants.TOKENS.MINUS_SEVEN.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusSevenAmount}
                />
            <Token
                type={Constants.TOKENS.MINUS_EIGHT.TYPE}
                imagePath={Constants.TOKENS.MINUS_EIGHT.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusEightAmount}
                />
            <Token
                type={Constants.TOKENS.SKULL.TYPE}
                imagePath={Constants.TOKENS.SKULL.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.skullAmount}
                />
            <Token
                type={Constants.TOKENS.CULTIST.TYPE}
                imagePath={Constants.TOKENS.CULTIST.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.cultistAmount}
                />
            <Token
                type={Constants.TOKENS.TABLET.TYPE}
                imagePath={Constants.TOKENS.TABLET.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tabletAmount}
                />
            <Token
                type={Constants.TOKENS.ELDER_THING.TYPE}
                imagePath={Constants.TOKENS.ELDER_THING.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.elderThingAmount}
                />
            <Token
                type={Constants.TOKENS.TENTICLES.TYPE}
                imagePath={Constants.TOKENS.TENTICLES.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tenticlesAmount}
                />
            <Token
                type={Constants.TOKENS.ELDER_SIGN.TYPE}
                imagePath={Constants.TOKENS.ELDER_SIGN.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.elderSignAmount}
                />
        </div>
    );
}

ChaosBag.propTypes = {
    plusOneAmount: React.PropTypes.number.isRequired,
    zeroAmount: React.PropTypes.number.isRequired,
    minusOneAmount: React.PropTypes.number.isRequired,
    minusTwoAmount: React.PropTypes.number.isRequired,
    minusThreeAmount: React.PropTypes.number.isRequired,
    minusFourAmount: React.PropTypes.number.isRequired,
    minusFiveAmount: React.PropTypes.number.isRequired,
    minusSixAmount: React.PropTypes.number.isRequired,
    minusSevenAmount: React.PropTypes.number.isRequired,
    minusEightAmount: React.PropTypes.number.isRequired,
    skullAmount: React.PropTypes.number.isRequired,
    cultistAmount: React.PropTypes.number.isRequired,
    tabletAmount: React.PropTypes.number.isRequired,
    elderThingAmount: React.PropTypes.number.isRequired,
    tenticlesAmount: React.PropTypes.number.isRequired,
    elderSignAmount: React.PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    return {
        plusOneAmount: state.tokens.plusOne,
        zeroAmount: state.tokens.zero,
        minusOneAmount: state.tokens.minusOne,
        minusTwoAmount: state.tokens.minusTwo,
        minusThreeAmount: state.tokens.minusThree,
        minusFourAmount: state.tokens.minusFour,
        minusFiveAmount: state.tokens.minusFive,
        minusSixAmount: state.tokens.minusSix,
        minusSevenAmount: state.tokens.minusSeven,
        minusEightAmount: state.tokens.minusEight,
        skullAmount: state.tokens.skull,
        cultistAmount: state.tokens.cultist,
        tabletAmount: state.tokens.tablet,
        elderThingAmount: state.tokens.elderThing,
        tenticlesAmount: state.tokens.tenticles,
        elderSignAmount: state.tokens.elderSign,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTokenAmountChange: (tokenType, amount) => {
            dispatch(changeTokenAmount(tokenType, amount))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChaosBag);
