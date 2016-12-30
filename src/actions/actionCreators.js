import actions from './actions';

export const changeCampaign = (selectedCampaignName) => {
    return { type: actions.CHANGE_CAMPAIGN, selectedCampaignName }
}

export const changeScenario = (selectedScenarioName) => {
    return { type: actions.CHANGE_SCENARIO, selectedScenarioName }
}

export const changeDifficulty = (selectedDifficulty) => {
    return { type: actions.CHANGE_DIFFICULTY, selectedDifficulty }
}

export const changeTokenAmount = (tokenType, amount) => {
    return { type: actions.CHANGE_TOKEN_AMOUNT, tokenType, amount }
}
