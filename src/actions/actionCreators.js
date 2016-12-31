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

export const onPullToken = () => {
    return { type: actions.PULL_TOKEN }
}

export const onRevealedTokenClick = (revealedTokenId, revealedTokenType) => {
    return { type: actions.PUT_TOKEN_BACK, revealedTokenId, revealedTokenType }
}
