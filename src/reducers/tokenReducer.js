import ActionTypes from './../actions/actionTypes';

const initialState = {
    plusOne: 0,
    zero: 0,
    minusOne: 0,
    minusTwo: 0,
    minusThree: 0,
    minusFour: 0,
    minusFive: 0,
    minusSix: 0,
    minusSeven: 0,
    minusEight: 0,
    skull: 0,
    cultist: 0,
    tablet: 0,
    elderThing: 0,
    tenticles: 0,
    elderSign: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_TOKEN_AMOUNT:
            const tokenState = {};
            tokenState[action.tokenType] = action.amount
            return Object.assign({}, state, tokenState);
        default:
            return state;
    }
};
