import ActionTypes from './../actions/actionTypes';
import Constants from './../Constants';

const initialState = {
    selectedCampaignName: Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT,
    selectedScenarioName: Constants.SCENARIOS.THE_GATHERING,
    selectedDifficulty: Constants.DIFFICULTIES.STANDARD
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_CAMPAIGN:
            if(action.selectedCampaignName === Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT) {
                return Object.assign({}, state, {
                    selectedCampaignName: action.selectedCampaignName,
                    selectedDifficulty: Constants.DIFFICULTIES.STANDARD,
                    selectedScenarioName: Constants.SCENARIOS.THE_GATHERING
                });
            } else if(action.selectedCampaignName === Constants.CAMPAIGNS.STAND_ALONE_SCENARIOS) {
                return Object.assign({}, state, {
                    selectedCampaignName: action.selectedCampaignName,
                    selectedDifficulty: Constants.DIFFICULTIES.STANDARD,
                    selectedScenarioName: Constants.SCENARIOS.CURSE_OF_THE_ROUGAROU
                });
            } else {
                return state;
            }
        case ActionTypes.CHANGE_SCENARIO:
            return Object.assign({}, state, {
                selectedScenarioName: action.selectedScenarioName
            });
        case ActionTypes.CHANGE_DIFFICULTY:
            return Object.assign({}, state, {
                selectedDifficulty: action.selectedDifficulty
            });
        default:
            return state;
    }
};