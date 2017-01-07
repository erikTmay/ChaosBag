import constants from './../constants';
import chaosBagDefaults from './../chaosBagDefaults';

//TODO: make the tokens and revealedTokens arrays look more alike
//TODO: keeping the imagePath on the token could make the rendering of ChaosBag.jsx cleaner?
export default {
    selectedCampaignName: constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT,
    selectedScenarioName: constants.SCENARIOS.THE_GATHERING,
    selectedDifficulty: constants.DIFFICULTIES.STANDARD,
    tokens: chaosBagDefaults[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.STANDARD],
    revealedTokens: []
};
