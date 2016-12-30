//TODO: look into useing immutablejs to store state as a Map?
//state = Map(), state.set() , state.update()
import Actions from './../actions/actions';
import constants from './../constants';
import chaosBagDefaults from './../chaosBagDefaults';
import _ from 'lodash';

const initialState = {
    selectedCampaignName: constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT,
    selectedScenarioName: constants.SCENARIOS.THE_GATHERING,
    selectedDifficulty: constants.DIFFICULTIES.STANDARD,
    tokens: chaosBagDefaults[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.STANDARD]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_CAMPAIGN:
            if(action.selectedCampaignName === constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT) {
                return Object.assign({}, state, {
                    selectedCampaignName: action.selectedCampaignName,
                    selectedDifficulty: constants.DIFFICULTIES.STANDARD,
                    selectedScenarioName: constants.SCENARIOS.THE_GATHERING,
                    tokens: _.cloneDeep(chaosBagDefaults[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.STANDARD])
                });
            } else if(action.selectedCampaignName === constants.CAMPAIGNS.STAND_ALONE_SCENARIOS) {
                return Object.assign({}, state, {
                    selectedCampaignName: action.selectedCampaignName,
                    selectedDifficulty: constants.DIFFICULTIES.STANDARD,
                    selectedScenarioName: constants.SCENARIOS.CURSE_OF_THE_ROUGAROU,
                    tokens: _.cloneDeep(chaosBagDefaults[constants.SCENARIOS.CURSE_OF_THE_ROUGAROU][constants.DIFFICULTIES.STANDARD])
                });
            } else {
                return state;
            }
        case Actions.CHANGE_SCENARIO:
            return Object.assign({}, state, {
                selectedScenarioName: action.selectedScenarioName,
                tokens: _.cloneDeep(chaosBagDefaults[action.selectedScenarioName][state.selectedDifficulty])
            });
        case Actions.CHANGE_DIFFICULTY:
            return Object.assign({}, state, {
                selectedDifficulty: action.selectedDifficulty,
                tokens: _.cloneDeep(chaosBagDefaults[state.selectedScenarioName][action.selectedDifficulty])
            });
        case Actions.CHANGE_TOKEN_AMOUNT:
            const newState = _.cloneDeep(state);
            newState.tokens[action.tokenType] = action.amount
            return Object.assign({}, state, newState);
        default:
            return state;
    }
};

export default reducer;
