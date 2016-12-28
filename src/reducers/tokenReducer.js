import Constants from './../Constants';
import ActionTypes from './../actions/actionTypes';

//TODO: change tokenState.plusOne to tokenState[action.tokenType]
// e.g. tokenState[action.tokenType] = action.amount
export default (state, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_TOKEN_AMOUNT:
            const tokenState = {};
            if (action.tokenType === Constants.TOKENS.PLUS_ONE.TYPE) {
                tokenState.plusOne = action.amount
            } else if (action.tokenType === Constants.TOKENS.ZERO.TYPE) {
                tokenState.zero = action.amount
            } else if (action.tokenType === Constants.TOKENS.MINUS_ONE.TYPE) {
                tokenState.minusOne = action.amount
            } else if (action.tokenType === Constants.TOKENS.MINUS_TWO.TYPE) {
                tokenState.minusTwo = action.amount
            } else if (action.tokenType === Constants.TOKENS.MINUS_THREE.TYPE) {
                tokenState.minusThree = action.amount
            } else if (action.tokenType === Constants.TOKENS.MINUS_FOUR.TYPE) {
                tokenState.minusFour = action.amount
            } else if (action.tokenType === Constants.TOKENS.MINUS_FIVE.TYPE) {
                tokenState.minusFive = action.amount
            } else if (action.tokenType === Constants.TOKENS.MINUS_SIX.TYPE) {
                tokenState.minusSix = action.amount
            } else if (action.tokenType === Constants.TOKENS.MINUS_SEVEN.TYPE) {
                tokenState.minusSeven = action.amount
            } else if (action.tokenType === Constants.TOKENS.MINUS_EIGHT.TYPE) {
                tokenState.minusEight = action.amount
            } else if (action.tokenType === Constants.TOKENS.SKULL.TYPE) {
                tokenState.skull = action.amount
            } else if (action.tokenType === Constants.TOKENS.CULTIST.TYPE) {
                tokenState.cultist = action.amount
            } else if (action.tokenType === Constants.TOKENS.TABLET.TYPE) {
                tokenState.tablet = action.amount
            } else if (action.tokenType === Constants.TOKENS.ELDER_THING.TYPE) {
                tokenState.elderThing = action.amount
            } else if (action.tokenType === Constants.TOKENS.TENTICLES.TYPE) {
                tokenState.tenticles = action.amount
            } else if (action.tokenType === Constants.TOKENS.ELDER_SIGN.TYPE) {
                tokenState.elderSign = action.amount
            }
            return Object.assign({}, state, tokenState);
        default:
            return state;
    }
};
