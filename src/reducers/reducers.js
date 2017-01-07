//TODO: look into useing immutablejs to store state as a Map?
//state = Map(), state.set() , state.update()
import Actions from './../actions/actions';
import constants from './../constants';
import chaosBagDefaults from './../chaosBagDefaults';
import pullTokenReducer from './pullTokenReducer';
import initialState from './initialState';
import _ from 'lodash';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_CAMPAIGN:
            if(action.selectedCampaignName === state.selectedCampaignName) {
                return state;
            } else if(action.selectedCampaignName === constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT) {
                return Object.assign({}, state, {
                    selectedCampaignName: action.selectedCampaignName,
                    selectedDifficulty: constants.DIFFICULTIES.STANDARD,
                    selectedScenarioName: constants.SCENARIOS.THE_GATHERING,
                    tokens: _.cloneDeep(chaosBagDefaults[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.STANDARD]),
                    revealedTokens: []
                });
            } else if(action.selectedCampaignName === constants.CAMPAIGNS.STAND_ALONE_SCENARIOS) {
                return Object.assign({}, state, {
                    selectedCampaignName: action.selectedCampaignName,
                    selectedDifficulty: constants.DIFFICULTIES.STANDARD,
                    selectedScenarioName: constants.SCENARIOS.CURSE_OF_THE_ROUGAROU,
                    tokens: _.cloneDeep(chaosBagDefaults[constants.SCENARIOS.CURSE_OF_THE_ROUGAROU][constants.DIFFICULTIES.STANDARD]),
                    revealedTokens: []
                });
            } else {
                return state;
            }
        case Actions.CHANGE_SCENARIO:
            return Object.assign({}, state, {
                selectedScenarioName: action.selectedScenarioName,
                tokens: _.cloneDeep(chaosBagDefaults[action.selectedScenarioName][state.selectedDifficulty]),
                revealedTokens: []
            });
        case Actions.CHANGE_DIFFICULTY:
            return Object.assign({}, state, {
                selectedDifficulty: action.selectedDifficulty,
                tokens: _.cloneDeep(chaosBagDefaults[state.selectedScenarioName][action.selectedDifficulty]),
                revealedTokens: []
            });
        case Actions.CHANGE_TOKEN_AMOUNT:
            if(action.amount < 0) {
                return state;
            } else {
                const newState = _.cloneDeep(state);
                newState.tokens[action.tokenType] = action.amount
                return Object.assign({}, state, newState);
            }
        case Actions.PULL_TOKEN:
            return pullTokenReducer(state, action);
        case Actions.PUT_TOKEN_BACK:
            const newState = _.cloneDeep(state);
            _.remove(newState.revealedTokens, function(token, index) {
                return token.id === action.revealedTokenId;
            });
            newState.tokens[action.revealedTokenType] += 1;
            return Object.assign({}, state, newState);
        default:
            return state;
    }
};

export default reducer;
