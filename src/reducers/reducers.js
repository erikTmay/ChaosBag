import Constants from './../Constants';
import ActionTypes from './../actions/actionTypes';
import tokenReducer from './tokenReducer';

const initialState = {
    selectedCampaignName: Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT,
    selectedScenarioName: Constants.SCENARIOS.THE_GATHERING,
    selectedDifficulty: Constants.DIFFICULTIES.STANDARD,
    tokens: {
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
    }
};

const chaosBagApp = (state = initialState, action) => {
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
        case ActionTypes.CHANGE_TOKEN_AMOUNT:
            return Object.assign({}, state, {
                tokens: tokenReducer(state.tokens, action)
            });
        default:
            return state;
    }
};


export default chaosBagApp;
