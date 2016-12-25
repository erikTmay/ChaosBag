import ActionTypes from './actionTypes';

export const changeCampaign = (selectedCampaignName) => {
  return { type: ActionTypes.CHANGE_CAMPAIGN, selectedCampaignName }
}

export const changeScenario = (selectedScenarioName) => {
  return { type: ActionTypes.CHANGE_SCENARIO, selectedScenarioName }
}

export const changeDifficulty = (selectedDifficulty) => {
  return { type: ActionTypes.CHANGE_DIFFICULTY, selectedDifficulty }
}