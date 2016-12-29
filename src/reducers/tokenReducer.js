import ActionTypes from './../actions/actionTypes';
import ChaosBagDefaults from './../ChaosBagDefaults';

const initialState = ChaosBagDefaults.THE_GATHERING.STANDARD;

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
