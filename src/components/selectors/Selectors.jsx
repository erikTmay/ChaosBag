import React from 'react';
import constants from './../../constants';
import Selector from './Selector';
import './selectors.css';

const selectableCampaigns = [constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT, constants.CAMPAIGNS.STAND_ALONE_SCENARIOS];
const NIGHT_OF_THE_ZEALOT_SCENARIOS = [
    constants.SCENARIOS.THE_GATHERING,
    constants.SCENARIOS.THE_MIDNIGHT_MASKS,
    constants.SCENARIOS.THE_DEVOURER_BELOW,
];
const STAND_ALONE_SCENARIOS = [
    constants.SCENARIOS.CURSE_OF_THE_ROUGAROU,
    constants.SCENARIOS.CARNEVALE_OF_HORRORS
];
const ALL_DIFFICULTIES = [
    constants.DIFFICULTIES.EASY,
    constants.DIFFICULTIES.STANDARD,
    constants.DIFFICULTIES.HARD,
    constants.DIFFICULTIES.EXPERT
];
const STANDARD_AND_HARD_DIFFICULTIES = [
    constants.DIFFICULTIES.STANDARD,
    constants.DIFFICULTIES.HARD
];

const Selectors = (props) => {

    let selectableScenarios = [];
    let selectableDifficulties = [];
    if(props.selectedCampaignName === constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT) {
        selectableScenarios = NIGHT_OF_THE_ZEALOT_SCENARIOS;
        selectableDifficulties = ALL_DIFFICULTIES;
    } else if(props.selectedCampaignName === constants.CAMPAIGNS.STAND_ALONE_SCENARIOS) {
        selectableScenarios = STAND_ALONE_SCENARIOS;
        selectableDifficulties = STANDARD_AND_HARD_DIFFICULTIES;
    }

    return (
        <div className="selectors">
            <Selector
                selectorName={constants.SELECTOR_TYPES.CAMPAIGN}
                selectedValue={props.selectedCampaignName}
                handleOnChange={props.onCampaignChange}
                values={selectableCampaigns}
            />
            <Selector
                selectorName={constants.SELECTOR_TYPES.SCENARIO}
                selectedValue={props.selectedScenarioName}
                handleOnChange={props.onScenarioChange}
                values={selectableScenarios}
            />
            <Selector
                selectorName={constants.SELECTOR_TYPES.DIFFICULTY}
                selectedValue={props.selectedDifficulty}
                handleOnChange={props.onDifficultyChange}
                values={selectableDifficulties}
            />
        </div>
    );
}

Selectors.propTypes = {
    onCampaignChange: React.PropTypes.func.isRequired,
    onScenarioChange: React.PropTypes.func.isRequired,
    onDifficultyChange: React.PropTypes.func.isRequired,
    selectedCampaignName: React.PropTypes.string.isRequired,
    selectedScenarioName: React.PropTypes.string.isRequired,
    selectedDifficulty: React.PropTypes.string.isRequired
};

export default Selectors;
