import Constants from './../Constants';
import ActionTypes from './../actions/actionTypes';
import tokenReducer from './tokenReducer';

const NIGHT_OF_THE_ZEALOT_SCENARIOS = [
    Constants.SCENARIOS.THE_GATHERING,
    Constants.SCENARIOS.THE_MIDNIGHT_MASKS,
    Constants.SCENARIOS.THE_DEVOURER_BELOW,
];
const STAND_ALONE_SCENARIOS = [
    Constants.SCENARIOS.CURSE_OF_THE_ROUGAROU,
    Constants.SCENARIOS.CARNEVALE_OF_HORRORS
];
const ALL_DIFFICULTIES = [
    Constants.DIFFICULTIES.EASY,
    Constants.DIFFICULTIES.STANDARD,
    Constants.DIFFICULTIES.HARD,
    Constants.DIFFICULTIES.EXPERT
];
const STANDARD_AND_HARD_DIFFICULTIES = [
    Constants.DIFFICULTIES.STANDARD,
    Constants.DIFFICULTIES.HARD
];
const initialState = {
    selectedCampaignName: Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT,
    selectedScenarioName: Constants.SCENARIOS.THE_GATHERING,
    selectedDifficulty: Constants.DIFFICULTIES.STANDARD,
    visibleCampaigns: [
        Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT,
        Constants.CAMPAIGNS.STAND_ALONE_SCENARIOS
    ],
    visibleScenarios: NIGHT_OF_THE_ZEALOT_SCENARIOS,
    visibleDifficulties: ALL_DIFFICULTIES,
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
                    visibleScenarios: NIGHT_OF_THE_ZEALOT_SCENARIOS,
                    visibleDifficulties: ALL_DIFFICULTIES
                });
            } else if(action.selectedCampaignName === Constants.CAMPAIGNS.STAND_ALONE_SCENARIOS) {
                return Object.assign({}, state, {
                    selectedCampaignName: action.selectedCampaignName,
                    selectedDifficulty: Constants.DIFFICULTIES.STANDARD,
                    visibleScenarios: STAND_ALONE_SCENARIOS,
                    visibleDifficulties: STANDARD_AND_HARD_DIFFICULTIES
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
