import {
    changeCampaign,
    changeScenario,
    changeDifficulty,
    changeTokenAmount,
    onPullToken,
    onRevealedTokenClick
} from './actionCreators';
import actions from './actions';

describe('Action Creators ->', () => {
    it('Should create an action to change the campaign.', () => {
        const selectedCampaignName = 'Night of the Zealot';
        const expectedAction = {
            type: actions.CHANGE_CAMPAIGN,
            selectedCampaignName
        };
        expect(changeCampaign(selectedCampaignName)).toEqual(expectedAction);
    });

    it('Should create an action to change the scenario.', () => {
        const selectedScenarioName = 'The Gathering';
        const expectedAction = {
            type: actions.CHANGE_SCENARIO,
            selectedScenarioName
        };
        expect(changeScenario(selectedScenarioName)).toEqual(expectedAction);
    });

    it('Should create an action to change the difficulty.', () => {
        const selectedDifficulty = 'Easy';
        const expectedAction = {
            type: actions.CHANGE_DIFFICULTY,
            selectedDifficulty
        };
        expect(changeDifficulty(selectedDifficulty)).toEqual(expectedAction);
    });

    it('Should create an action to change the token amount.', () => {
        const tokenType = 'elderThing';
        const amount = 2;
        const expectedAction = {
            type: actions.CHANGE_TOKEN_AMOUNT,
            tokenType,
            amount
        };
        expect(changeTokenAmount(tokenType, amount)).toEqual(expectedAction);
    });

    it('Should create an action to pull a token.', () => {
        const expectedAction = {
            type: actions.PULL_TOKEN
        };
        expect(onPullToken()).toEqual(expectedAction);
    });

    it('Should create an action to put a token back in the bag.', () => {
        const revealedTokenId = '1234';
        const revealedTokenType = 'tenticles'
        const expectedAction = {
            type: actions.PUT_TOKEN_BACK,
            revealedTokenId,
            revealedTokenType
        };
        expect(onRevealedTokenClick(revealedTokenId, revealedTokenType)).toEqual(expectedAction);
    });
});