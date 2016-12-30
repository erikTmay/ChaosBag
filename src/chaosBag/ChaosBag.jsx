import React from 'react';
import { connect } from 'react-redux';
import { changeTokenAmount } from './../actions/actionCreators';
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
                amount={props.plusOneAmount}
                />
            <Token
                type={constants.TOKENS.ZERO.TYPE}
                imagePath={constants.TOKENS.ZERO.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.zeroAmount}
                />
            <Token
                type={constants.TOKENS.MINUS_ONE.TYPE}
                imagePath={constants.TOKENS.MINUS_ONE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusOneAmount}
                />
            <Token
                type={constants.TOKENS.MINUS_TWO.TYPE}
                imagePath={constants.TOKENS.MINUS_TWO.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusTwoAmount}
                />
            <Token
                type={constants.TOKENS.MINUS_THREE.TYPE}
                imagePath={constants.TOKENS.MINUS_THREE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusThreeAmount}
                />
            <Token
                type={constants.TOKENS.MINUS_FOUR.TYPE}
                imagePath={constants.TOKENS.MINUS_FOUR.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusFourAmount}
                />
            <Token
                type={constants.TOKENS.MINUS_FIVE.TYPE}
                imagePath={constants.TOKENS.MINUS_FIVE.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusFiveAmount}
                />
            <Token
                type={constants.TOKENS.MINUS_SIX.TYPE}
                imagePath={constants.TOKENS.MINUS_SIX.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusSixAmount}
                />
            <Token
                type={constants.TOKENS.MINUS_SEVEN.TYPE}
                imagePath={constants.TOKENS.MINUS_SEVEN.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusSevenAmount}
                />
            <Token
                type={constants.TOKENS.MINUS_EIGHT.TYPE}
                imagePath={constants.TOKENS.MINUS_EIGHT.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.minusEightAmount}
                />
            <Token
                type={constants.TOKENS.SKULL.TYPE}
                imagePath={constants.TOKENS.SKULL.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.skullAmount}
                />
            <Token
                type={constants.TOKENS.CULTIST.TYPE}
                imagePath={constants.TOKENS.CULTIST.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.cultistAmount}
                />
            <Token
                type={constants.TOKENS.TABLET.TYPE}
                imagePath={constants.TOKENS.TABLET.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tabletAmount}
                />
            <Token
                type={constants.TOKENS.ELDER_THING.TYPE}
                imagePath={constants.TOKENS.ELDER_THING.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.elderThingAmount}
                />
            <Token
                type={constants.TOKENS.TENTICLES.TYPE}
                imagePath={constants.TOKENS.TENTICLES.IMAGE_PATH}
                setAmount={props.onTokenAmountChange.bind(this)}
                amount={props.tenticlesAmount}
                />
            <Token
                type={constants.TOKENS.ELDER_SIGN.TYPE}
                imagePath={constants.TOKENS.ELDER_SIGN.IMAGE_PATH}
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
